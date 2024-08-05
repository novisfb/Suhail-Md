const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "237680249748" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237680249748";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInY2NndteVdTUHRGZ1dFUnp6L1g4T2IrYkJvWE8xZS91Z2FuQ21wSUl5alE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklsejFVZHBXUUtXd0FTZVJpTzZfQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2U1ZDgyZWQtYjYzNi00YTI0LWI5ZmYtYjRjNmJkMDdiMmQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTk1LFxuICAgICAgODAsXG4gICAgICAxNTMsXG4gICAgICAyMTksXG4gICAgICA3NCxcbiAgICAgIDE0MixcbiAgICAgIDEyNSxcbiAgICAgIDE1MCxcbiAgICAgIDE0NCxcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgMTUxLFxuICAgICAgNTAsXG4gICAgICA0OSxcbiAgICAgIDI0MixcbiAgICAgIDIxLFxuICAgICAgMjQxLFxuICAgICAgMTY1LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE2OCxcbiAgICAgIDIyNCxcbiAgICAgIDIxMCxcbiAgICAgIDMsXG4gICAgICA5NCxcbiAgICAgIDIzNCxcbiAgICAgIDExMyxcbiAgICAgIDg2LFxuICAgICAgMTIyLFxuICAgICAgMTI5LFxuICAgICAgMjA2LFxuICAgICAgMjA1LFxuICAgICAgMjUwLFxuICAgICAgODcsXG4gICAgICA3OSxcbiAgICAgIDQwLFxuICAgICAgNTUsXG4gICAgICA1NCxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBaM01ISjlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODAyNDk3NDg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTgzNjAxNTAzODUzNDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJekhtMndRbTgrcXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFCN2hiUWxQSGYrRUlycmxlc29WZUJPcFVmVnA3N3FBaDdSb0lEcGtEbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmRNay84aVJ4blVYTnBmYmVFcFRjMlgydThRN3ZwU0NzQXZXbWpHK1J0c3VRb2NvWGNxTXhYSG9ydWFGSHpKVS9vc3BkamZibFZGVHRKdmZDdlVFQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOUdjcE1wSHlvLzJYZ0pIeVhkZmtvMUZyejduVzIzQUkxWnB1OEFQL2d3RnlJNGx4Wlo1UWZhQm1wQkJqMFgzTm95Sy92OU1pN3RNUS9PenFwVnRIalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjgwMjQ5NzQ4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0NjAwNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTWlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtNaS5qc29uIjogIntcImtleURhdGFcIjpcIm1XdWY4a0FVRXVGSXZnRWlCSVBHWnVZZ3pZSFpLbUxsUFdzeUVxeEZLOUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI2OTQzODg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0NjAwNjczOTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝖓𝖔𝖛𝖎𝖘_𝖋𝖇🥷🏽",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝖓𝖔𝖛𝖎𝖘_𝖋𝖇🥷🏽🏴",
  ownername:process.env.OWNER_NAME|| "𝖓𝖔𝖛𝖎𝖘_𝖋𝖇🥷🏽",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
