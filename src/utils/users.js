const users = [];
const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate
  if (!username || !room) {
    return {
      error: "Username and room are required ",
    };
  }

  //check for existence user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate user
  if (existingUser) {
    return {
      error: "username is in use",
    };
  }

  //store users
  const user = {
    username,
    room,
    id,
  };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const indexUser = users.findIndex((user) => user.id === id);

  if (indexUser !== -1) {
    return users.splice(indexUser, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

// addUser({ id: 24, username: "    HlIb", room: "   Kyiv HellO  " });
// addUser({ id: 11, username: "    olya", room: "   Kyiv HellO  " });
// addUser({ id: 28, username: "    Elena", room: "   Kharkiv HellO  " });
// const resAdd = addUser({ id: 25, username: "borys", room: "Kyiv hello" });
// console.log("users", users);
// console.log("resAdd", resAdd);
//
// const resRemove = removeUser(24);
// console.log("resRemove", resRemove);
// console.log("users2", users);
//
// const resGetUser = getUser(25);
// console.log("getUser", resGetUser);
//
// const resGerUsersInRoom = getUsersInRoom("Kyiv HellO");
// console.log("resGetUserInRoom", resGerUsersInRoom);
