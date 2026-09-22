const { cmd } = require('../command');
cmd({
    pattern: "fatima",
    desc: "Fatima AI reply",
    category: "fun",
    react: "❤️"
}, async (conn, mek, m, { reply }) => {
    await reply("Yes, main aap ka AI hun, Fatima! bolo kya chahiye? 🥰");
});
