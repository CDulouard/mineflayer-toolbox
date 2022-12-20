import { sleep } from './utils/utils'

const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
import * as move from './move/move'
import { jump } from './move/move'
import { blockAtCursor, getVisibleBlocks } from './vision/vision'
import { Player } from 'mineflayer'

export const main = async () => {
  const port = 40899

  const bot = mineflayer.createBot({
    host: 'localhost', // minecraft server ip
    username: 'bot', // minecraft username
    port: port, // only set if you need a port that isn't 25565
  })

  bot.loadPlugin(pathfinder)

  // bot.on('chat', (username, message) => {
  //     console.log("test")
  //     if (username === bot.username) return
  //     bot.chat(message)
  // })

  bot.once('spawn', async () => {
    mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
    while (true) {
      // move.forward(bot)
      // jump(bot)
      // await sleep(1000)
      // move.backward(bot)
      // console.log(blockAtCursor(bot))
      // jump(bot)
      // await sleep(1000)
      getVisibleBlocks(bot)
      await sleep(1000)
    }
  })

  function lookAtNearestPlayer() {
    const playerFilter = (entity: Player | any) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)

    if (!playerEntity) return

    const pos = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(pos)
  }

  bot.on('physicTick', lookAtNearestPlayer)

  // Log errors and kick reasons:
  bot.on('kicked', console.log)
  bot.on('error', console.log)
}
main()
