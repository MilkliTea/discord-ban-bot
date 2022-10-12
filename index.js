const {Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})


client.login('MTAwNzYwMzg3ODU3MDc2NjM0OQ.GylPYw.EcXVwoHfr6-IwhIKDR8KVvFrC8sJTnJNG-Djj4')

client.on('messageCreate', message => {
    const data = message.embeds;
    if (message.embeds !== undefined) {
        for (var i = 0, l = data.length; i < l; i++) {
            const textEmbed = data[i];
            const description = textEmbed.data.description;
            const splitDesc = description.includes('!') ? description.split('!') : null;
            if (splitDesc !== null && splitDesc[0] === 'New user joined kommunity') {
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('primary')
                            .setLabel('Banla')
                            .setStyle(ButtonStyle.Danger),
                    );
                console.log(description.slice(-14, -7));
                const embed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle(textEmbed.data.title + ' banlansın mı?')
                    .setURL('https://discord.js.org');
                message.channel.send({content: '', ephemeral: true, embeds: [embed], components: [row]})
            }
        }
    }
// test için eklendi.
    if (message.content === 'basla') {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('/@merve59')
            .setURL('https://discord.js.org')
            .setDescription('New user joined kommunity! 101920. user!');

        const embed1 = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('wendesdays - language exchalde meetups')
            .setURL('https://discord.js.org')
            .setDescription('Istanbul english foreign language meetups created new event');

        message.channel.send({content: '', ephemeral: true, embeds: [embed1]});
        message.channel.send({content: '', ephemeral: true, embeds: [embed]});

    }
})


