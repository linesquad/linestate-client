const ProfilePage = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div>
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div>
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <div>
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
