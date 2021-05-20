module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  DefaultPrefix: process.env.Prefix || "?", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/w73wHyz8yM", //Support Server Link
  Token: process.env.Token || "ODQ0ODY5NjgyNzI0MjA4NjQx.YKYsNQ.RYKmIETlyWPuZFXE37_aITBiVB4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "844869682724208641", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "2Ru-yTz0onjgtBK4hveTWS3HvCGPTur8", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lavalink.sudhanplayz.live",
    port: 1234,
    pass: "CodingWithSudhan",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "50a73625e0d94ac093afe3c642750cef", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "2151ab890d5748e1bdee574c7445c32b", //Spotify Client Secret
  },
};
