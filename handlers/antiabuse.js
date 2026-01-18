const badWords = ["fuck", "shit", "bitch"];

export function antiAbuse(message) {
  const content = message.content.toLowerCase();

  for (const word of badWords) {
    const regex = new RegExp(`\\b${word}\\b`, "i");
    if (regex.test(content)) {
      message.delete();
      message.reply("⚠️ Watch your language.");
      break;
    }
  }
}
