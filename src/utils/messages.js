const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getTime(),
  };
};

const generateLocationMessage = (username, locationUrl) => {
  return {
    locationUrl,
    createdAt: new Date().getTime(),
    username,
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
