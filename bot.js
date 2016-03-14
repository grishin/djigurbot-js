var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(process.env.DJIGURBOT_TELEGRAMAPIKEY, {polling: true});

bot.onText(/\/hi/, function (msg, match) {
  bot.sendMessage(msg.from.id, `Привет, ${msg.from.first_name}`);
});

bot.onText(/костя/i, function (msg, match) {
  bot.sendMessage(msg.from.id, "Костя крутой!");
});

bot.onText(/твоя!/i, function (msg, match) {
  bot.sendMessage(msg.from.id, "Нееееет, твоя!");
});

bot.onText(/крутой/i, function (msg, match) {
  bot.sendMessage(msg.from.id, `Нееееет, ${msg.from.first_name}, это ты крутой!`);
});

bot.onText(/сокиабле/i, function (msg, match) {
  bot.sendMessage(msg.from.id, "Сокиабле? ЧОБЛЯ?");
});

bot.onText(/доброе утро/i, function (msg, match) {
  bot.sendMessage(msg.from.id, `И тебе наидобрейшего утра, ${msg.from.first_name}!`);
});

bot.onText(/поздравляй!/i, function (msg, match) {
  bot.sendMessage(msg.from.id, `С 8 марта поздравляем вас, коллеги,
От души хотим вам пожелать,
Чтоб совместные победы и успехи
Дали нам возможность процветать!
Чтоб в делах житейских и в работе
Находить умели компромисс,
Одевались по последней моде,
Были леди, то бишь миссис или мисс.
Чтобы было нам в кого влюбляться,
Чтобы было нас кому любить,
Молодыми вечно оставаться
и насыщенной веселой жизнью жить!`);
});

bot.onText(/Тост!/i, function (msg, match) {
  bot.sendMessage(msg.from.id, "Опять бухать!?!? Работать кто будет?");
});