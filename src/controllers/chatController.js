const chatQueries = require("../db/queries.chats.js");

module.exports = {
    index(req, res, next){
        chatQueries.getAllChats((err, chats) => {

            if(err){
                console.log(err);
                res.redirect(500, "static/index");  
            } else {
                res.render("chats/index", {chats});
            }
            })
    },

    create(req, res, next){
        let newMessage = {
          author: req.body.author,
          message: req.body.message
        };
        chatQueries.addMessage(newMessage, (err, message) => {
          if(err){
            res.redirect(500, "/chats");
          } else {
            res.redirect(303, "/chats");
          }
        });
      },

  }