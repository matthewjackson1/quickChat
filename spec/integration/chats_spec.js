const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/chats/";
const sequelize = require("../../src/db/models/index").sequelize;
const Chat = require("../../src/db/models").Chat;

describe("routes : chats", () => {
  
    beforeEach((done) => {
        this.chat;
        sequelize.sync({force: true}).then((res) => {
  
         Chat.create({
           author: "Matthew",
           message: "Welcome to QuickChat"
         })
          .then((chat) => {
            this.chat = chat;
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
  
        });
  
      });

  describe("GET /chats", () => {

    it("should return a status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

  });

  describe("POST /topics/create", () => {
    const options = {
      url: `${base}create`,
      form: {
        author: "Beyonce Knowles",
        message: "What's your favorite Destiny's Child song?"
      }
    };

    it("should create a new message and refresh", (done) => {

//#1
      request.post(options,

        (err, res, body) => {
          Chat.findOne({where: {author: "Beyonce Knowles"}})
          .then((chat) => {
            expect(res.statusCode).toBe(303);
            expect(chat.author).toBe("Beyonce Knowles");
            expect(chat.message).toBe("What's your favorite Destiny's Child song?");
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });
  });

});