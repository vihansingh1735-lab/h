const joins = [];

client.on("guildMemberAdd", member => {
  const now = Date.now();
  joins.push(now);

  const recent = joins.filter(t => now - t < 30000);

  if (recent.length >= 10) {
    member.guild.systemChannel?.send("🚨 Possible raid detected!");
  }
});
