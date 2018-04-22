module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const chatRoutes = require("../routes/chats");
      app.use(staticRoutes);
      app.use(chatRoutes);
    }
  }