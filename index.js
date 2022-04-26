const express = require("express")
const app = express()

app.listen(3000,() => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Project is  running!");
  
})

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.on("messageCreate", message => { 
if (message.content === "ping" ) {
message.channel.send("pong")}
})

client.login(process.env.token);
