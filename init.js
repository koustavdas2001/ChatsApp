const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  })
  
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/chatsapp');
}

let allChats = [
    {
        from: "andi",
        to: "bandi",
        msg: "send me your photos",
        created_at: new Date(),
    },
    {
        from: "gandi",
        to: "sandi",
        msg: "send me your videos",
        created_at: new Date(),
    },
    {
        from: "jndi",
        to: "bai",
        msg: "when you comming for work?",
        created_at: new Date(),
    },
    {
        from: "gandhi",
        to: "shanti",
        msg: "come home ASAP!",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);