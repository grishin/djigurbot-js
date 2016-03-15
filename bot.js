var toasts = require("./toasts.js");
var nights = require("./good-nights.js")

var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(process.env.DJIGURBOT_TELEGRAMAPIKEY, {polling: true});

bot.onText(/\/hi/,  (msg, match) => {
  bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}`);
});

bot.onText(/костя/i, (msg, match) => {
  bot.sendMessage(msg.chat.id, "Костя крутой!");
});

bot.onText(/твоя!/i, (msg, match) => {
  bot.sendMessage(msg.chat.id, "Нееееет, твоя!");
});

bot.onText(/крутой/i, (msg, match) => {   
  bot.sendMessage(msg.chat.id, `Нееееет, ${msg.from.first_name}, это ты крутой!`);
});

bot.onText(/сокиабле/i, (msg, match) => {
  bot.sendMessage(msg.chat.id, "Сокиабле? ЧОБЛЯ?");
});

// ЙОХОХО! И БУТЫЛКА РОМУ!

bot.onText(/доброе утро/i, (msg, match) => {
  bot.sendMessage(msg.chat.id, `И тебе наидобрейшего утра, ${msg.from.first_name}!`);
});

bot.onText(/спокойной ночи/i, (msg, match) => {
  bot.sendMessage(msg.chat.id, `${msg.from.first_name}, ${nights.getRandomNight()}`);
});

bot.onText(/тест!/i, (msg, match) => {
  bot.sendMessage(msg.chat.id, `Я тут, ${msg.from.first_name} !`);
});

bot.onText(/поздравляй!/i, function (msg, match) {
  bot.sendMessage(msg.chat.id, `С 8 марта поздравляем вас, коллеги,
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
  bot.sendMessage(msg.chat.id, "Опять бухать!?!? Работать кто будет?");
});

bot.onText(/sudo Тост!/i, function (msg, match) {
  bot.sendMessage(msg.chat.id, toasts.getRandomToast());
});

bot.onText(/Тост говори!/i, function (msg, match) {
  bot.sendMessage(msg.chat.id, toasts.getRandomToast());
});

bot.onText(/чатик/i, function (msg, match) {
  bot.sendMessage(msg.chat.id, "Я не хочу в отдельный чатик, Вадим!!!");
});

bot.onText(/плохо/i, function (msg, match) {
  bot.sendMessage(msg.chat.id, `Хочешь поговорить об этом, ${msg.from.first_name}?`);
});