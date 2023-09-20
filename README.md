# Twitch Chat Bot using Node.js
- This bot is going to start off with a few basic features, including:
	- Recurring messages & reminders for chatters
	- Moderation for specific keywords
	- Interactive commands like rolling dice, or 8ball questions, etc.

- The goal is to introduce more complexity and features over time!
	
# Implementation
- This bot was created by following the [Twitch API](https://dev.twitch.tv/docs/) documentation. 
- Twitch recommends using the [websocket package](https://www.npmjs.com/package/websocket) with Node.js, however there are many different ways to implement and access their API. In this case, I created it following a library called [tmi.js](https://tmijs.com/)

# Usage
- If you want to download and use this bot, just follow these steps:
	- You have to create a twitch account for yourself if you don't have one already, and then also create one for the bot.
	- You need to [register the app](https://dev.twitch.tv/docs/authentication/register-app/) on your main account, not the bot account. You may use this guide from the TwitchAPI as a frame of reference.
	- There are a few lines in the app.js and auth.js files that will need to be changed as some of the information is generated specific to your twitch account and project.
	- First you should run auth.js. It will open your browser, and open twitch. Make sure you authenticate it with your bot account, and not your main account.
	- Second, An access token will have been generated from auth.js. You need to take that access code, and put it into the app.js app.
	- Assuming you filled in all of the information correctly, and set up the project, you should be able to run app.js and the bot should be ready to go!
	- Keep an eye out for updates to this repo as it is very simple and improvements are on the way!
	
# Bugs
- There is currently a bug in the auth.js code, I have yet to fix it, however the access code it generates in the url should still be valid for app.js, just copy and paste it into app.js.
