import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Rahul",
    age: 25
  };

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;
