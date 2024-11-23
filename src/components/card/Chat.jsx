import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiReq from "../../lib/apiReq";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import useNotificationStore from "../../lib/notificationStore";

const Chat = ({ chats }) => {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const messageEndRef = useRef(null);

  const decrease = useNotificationStore((state) => state.decrease);
  const handleOpenChat = async (chatId, receiver) => {
    try {
      const res = await apiReq.get(`/chats/${chatId}`);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;

    try {
      const res = await apiReq.post(`/messages/${chat.id}`, { text });
      setChat((prev) => ({
        ...prev,
        messages: [...prev.messages, res.data],
      }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiReq.put(`/chats/read/${chat.id}`);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({
            ...prev,
            messages: [...prev.messages, data],
          }));
          read();
        }
      });
    }

    return () => {
      socket?.off("getMessage");
    };
  }, [socket, chat]);

  useEffect(() => {
    if (messageEndRef.current) {
      const chatContainer = messageEndRef.current.parentElement;
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chat]);

  if (!chats) return null;
  return (
    <div className="h-full flex flex-col rounded-md">
      <div className="flex-[1] flex flex-col gap-5 p-5 rounded-md">
        <h1 className="font-light">Messages</h1>
        {chats.map((c) => (
          <div
            className="p-5 rounded-[10px] flex items-center gap-5 cursor-pointer"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id == c.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => {
              handleOpenChat(c.id, c.receiver);
            }}
          >
            <img
              src={c.receiver.avatar || "/avatar.png"}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="flex-[1] h-full bg-white flex flex-col justify-between">
          <div className="bg-[#f7c14b85] flex p-5 font-bold items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                src={chat.receiver.avatar || "/avatar.png"}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              {chat.receiver.username}
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="h-[350px] p-5 flex flex-col gap-5 overflow-y-auto">
            {chat.messages.map((message) => (
              <div
                key={message.id}
                className={`w-[50%] bg-red-300 p-2 rounded-md ${
                  message.userId !== currentUser.id ? "self-start" : "self-end"
                } ${
                  message.userId !== currentUser.id ? "text-right" : "text-left"
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs text-gray-500">
                  {format(message.createdAt)}
                </span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-[2px] border-[#f7c14b85] h-[60px] flex items-center justify-between"
          >
            <textarea
              name="text"
              className="flex-[3] h-full border-none p-[20px]"
            ></textarea>
            <button className="flex-[1] bg-[#f7c14b85] h-full border-none cursor-pointer">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
