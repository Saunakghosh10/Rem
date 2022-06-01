require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'ODI5MDQ4ODk5OTkzODYyMTY1.GRLUsj.kZs1jOTfunFlJfppsv2Rt7KAiQBsNaRcAAHE5w', // your discord bot token
  prefix: process.env.PREFIX || '!', // bot prefix
  ownerID: process.env.OWNERID || ['695672697270829116'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '6x4d9qw7k8e2hn82a64w1d2yyf7ev7', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '7p60x1z4f5elq4qwwky3fx3csgfm7k', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://user:tnJJuH6IyKy7qn6E@cluster0.iv60t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
  // MongoDb URL
  embedColor: process.env.COlOR || '#3366ff', // embed colour
  logs: process.env.LOGS || '', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/urTw2Hm3zd',
    invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=829048899993862165&permissions=1644971949559&scope=bot',
    vote: process.env.VOTE || 'https://discord.gg/urTw2Hm3zd',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lavalink.oops.wtf:2000',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'www.freelavalink.ga',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
