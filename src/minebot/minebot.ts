import { Bot } from 'mineflayer'
import {
  backward,
  forward,
  jump,
  left,
  right,
  rotateDegrees,
  rotateRadians,
  sneak,
  sprint,
  stop,
  walk,
} from '../actions/motion'
import { ViewManager } from '../vision/viewManager'
import {
  getAbsolutePosition,
  getDirectionDegrees,
  getDirectionRadians,
} from '../sensors/position'

export class Minebot {
  private readonly bot: Bot
  private readonly view: ViewManager

  private constructor(bot: Bot | any, view: ViewManager) {
    this.bot = bot
    this.view = view
  }

  public position() {
    return getAbsolutePosition(this.bot)
  }

  public directionRadians() {
    return getDirectionRadians(this.bot)
  }

  public directionDegrees() {
    return getDirectionDegrees(this.bot)
  }

  public moveForward() {
    forward(this.bot)
  }

  public moveBackward() {
    backward(this.bot)
  }

  public moveLeft() {
    left(this.bot)
  }

  public moveRight() {
    right(this.bot)
  }

  public jump() {
    jump(this.bot)
  }

  public stop() {
    stop(this.bot)
  }

  public sneak() {
    sneak(this.bot)
  }

  public walk() {
    walk(this.bot)
  }

  public sprint() {
    sprint(this.bot)
  }

  public rotateDegrees(angle: number) {
    rotateDegrees(this.bot, angle)
  }

  public rotateRadians(angle: number) {
    rotateRadians(this.bot, angle)
  }

  public blockAtCursor(maxDistance = 256) {
    return this.view.blockAtCursor(this.bot, maxDistance)
  }

  public visibleBlocks() {
    return this.view.getVisibleBlocks(this.bot)
  }

  public visibleBlockDistances() {
    return this.view.getBlockDistances(this.bot)
  }
}
