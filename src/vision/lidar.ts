import { Bot } from 'mineflayer'
import { defaultView } from './viewManager'
import { getBlockDistance } from './utils'

export const getBlockDistances = (
  bot: Bot | any,
  viewManager = defaultView
) => {
  const headPos = bot.entity.position.offset(0, bot.entity.height, 0)
  const rayDirectionMatrix = viewManager.rayDirectionMatrixFromPitchYaw(
    bot.entity.pitch,
    bot.entity.yaw
  )
  return rayDirectionMatrix.map(line =>
    line.map(direction => getBlockDistance(headPos, direction, bot.world))
  )
}
