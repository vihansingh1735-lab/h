import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

import messageEvent from "./events/messageCreate.js";

client.on("messageCreate", messageEvent);

client.login("YOUR_BOT_TOKEN");
