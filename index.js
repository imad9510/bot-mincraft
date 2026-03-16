const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'khadem_touil.aternos.me',
    port: 27402,
    username: 'AFK_Bot',
    version: '1.20.1'
  })

  bot.on('spawn', () => {
    console.log('Bot joined server')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log('Disconnected... reconnecting')
    setTimeout(createBot, 5000)
  })

}

createBot()