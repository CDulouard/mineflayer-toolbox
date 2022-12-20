import {Bot} from "mineflayer";

export const forward = (bot: Bot | any) => {
    stop(bot)
    bot.setControlState('forward', true)
}

export const backward = (bot: Bot | any) => {
    stop(bot)
    bot.setControlState('back', true)
}

export const left = (bot: Bot | any) => {
    stop(bot)
    bot.setControlState('left', true)
}

export const right = (bot: Bot | any) => {
    stop(bot)
    bot.setControlState('right', true)
}

export const jump = (bot: Bot | any) => {
    bot.setControlState('jump', true)
    bot.setControlState('jump', false)
}

export const stop = (bot: Bot | any) => {
    bot.setControlState('forward', false)
    bot.setControlState('back', false)
    bot.setControlState('left', false)
    bot.setControlState('right', false)
}