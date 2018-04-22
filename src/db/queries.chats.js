const Chat = require("./models").Chat;

module.exports = {

  getAllTopics(callback){
    return Chat.all()

    .then((chats) => {
      callback(null, chats);
    })
    .catch((err) => {
      callback(err);
      console.log(err);
    })
  }
}