const Chat = require("./models").Chat;

module.exports = {

  getAllChats(callback){
    return Chat.all()

    .then((chats) => {
      callback(null, chats);
    })
    .catch((err) => {
      callback(err);
      console.log(err);
    })
  },

  addMessage(newMessage, callback){
    return Chat.create({
      author: newMessage.author,
      message: newMessage.message
    })
    .then((message) => {
      callback(null, message);
    })
    .catch((err) => {
      callback(err);
    })
  }
}