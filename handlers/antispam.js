const cooldowns = new Map();

export function antiSpam(message) {
  if (message.author.bot) return;

  const now = Date.now();
  const userId = message.author.id;

  if (!cooldowns.has(userId)) {
    cooldowns.set(userId, []);
  }

  const timestamps = cooldowns.get(userId);
  timestamps.push(now);

  // Keep only last 5 seconds
  const filtered = timestamps.filter(t => now - t < 5000);
  cooldowns.set(userId, filtered);

  if (filtered.length >= 6) {
    message.delete().catch(() => {});
    message.member.timeout(60_000, "Spam").catch(() => {});
    message.channel.send(
      `${message.author}, stop spamming. You are muted for 1 minute.`
    );
  }
}
