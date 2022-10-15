const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(
  'MTAwNzYwMzg3ODU3MDc2NjM0OQ.GylPYw.EcXVwoHfr6-IwhIKDR8KVvFrC8sJTnJNG-Djj4'
);

client.on('messageCreate', (message) => {
  const data = message.embeds;
  if (message.embeds !== undefined) {
    for (var i = 0, l = data.length; i < l; i++) {
      const textEmbed = data[i];
      const description = textEmbed.data.description;
      if (description !== undefined) {
        const splitDesc = description.includes('!')
          ? description.split('!')
          : null;
        if (
          splitDesc !== null &&
          splitDesc[0] === 'New user joined kommunity'
        ) {
          customerId = description.slice(-14, -7);
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId(customerId)
              .setLabel('Banla')
              .setStyle('Danger'),
            new ButtonBuilder()
              .setLabel('Kommunitye Git')
              .setURL('https://kommunity.com')
              .setStyle('Link'),
          );

          const embed = new EmbedBuilder()
            .setColor(0xed4245)
            .setTitle(textEmbed.data.title + ' banlansın mı?');

          message.channel.send({
            content: '',
            ephemeral: true,
            embeds: [embed],
            components: [row],
          });
        }
      }
    }
  }
  // test için eklendi.
  if (message.content === 'ban botunu test et') {
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setURL('https://kommunity.com/')
      .setTitle('/@merve59')
      .setDescription('New user joined kommunity! 101920. user!');

    const embed1 = new EmbedBuilder()
      .setColor(0x0099ff)
      .setURL('https://kommunity.com/')
      .setTitle('wendesdays - language exchalde meetups')
      .setDescription(
        'Istanbul english foreign language meetups created new event'
      );

    message.channel.send({ content: '', ephemeral: true, embeds: [embed1] });
    message.channel.send({ content: '', ephemeral: true, embeds: [embed] });
  }
});

client.on('interactionCreate', (interaction) => {
  if (interaction.isButton()) {
    const btnId = interaction.customId;
    console.log('id' + btnId);
    interaction.reply({ content: 'Kullanıcı Banlandı!' });
  }
});
