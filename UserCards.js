import React from "react";

const UserCards = () => {
  const users = [
    { name: "John Doe", profilePicture: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", profilePicture: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Alex Johnson", profilePicture: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  return (
    <div>
      <h2>User Cards</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {users.map((user, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src={user.profilePicture} alt={user.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
