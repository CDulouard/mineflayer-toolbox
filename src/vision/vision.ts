import { Bot } from 'mineflayer'
import { ViewManager } from './viewManager'
import { getBlock } from './utils'

const defaultView = ViewManager.newViewFromDegrees(90, 30, 90, 30)

export const blockAtCursor = (bot: Bot | any, maxDistance = 10) => {
  return bot.blockAtCursor(maxDistance)
}

export const getVisibleBlocks = (bot: Bot | any, viewManager = defaultView) => {
  const headPos = bot.entity.position.offset(0, bot.entity.height, 0)
  const rayDirectionMatrix = viewManager.rayDirectionMatrixFromPitchYaw(
    bot.entity.pitch,
    bot.entity.yaw
  )
  return rayDirectionMatrix.map(line =>
    line.map(direction => getBlock(headPos, direction, bot.world))
  )
}
