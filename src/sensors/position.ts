import { Bot } from 'mineflayer'
import { radiansToDegrees } from '../utils/utils'

export const getAbsolutePosition = (bot: Bot | any) => {
  return bot.entity.position
}

export const getDirectionRadians = (bot: Bot | any) => {
  const direction = bot.entity.yaw % (2 * Math.PI)
  return direction < 0 ? direction + 2 * Math.PI : direction
}

export const getDirectionDegree = (bot: Bot | any) => {
  return radiansToDegrees(getDirectionRadians(bot))
}
