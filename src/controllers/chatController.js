const chatQueries = require("../db/queries.chats.js");

module.exports = {
    index(req, res, next){
        chatQueries.getAllChats((err, chats) => {

            if(err){
                res.redirect(500, "static/index");
            } else {
                res.render("chats/index", {chats});
            }
            })
    }
  }