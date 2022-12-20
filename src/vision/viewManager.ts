import { Vec3 } from 'vec3'
import { getViewDirection } from './utils'

export const MAX_DISTANCE = 256

export class ViewManager {
  private readonly horizontalAngleRad: number
  private readonly verticalAngleRad: number
  private readonly horizontalResolution: number
  private readonly verticalResolution: number
  private readonly horizontalDelta: number
  private readonly verticalDelta: number

  public static newViewFromDegrees(
    horizontalAngle: number,
    verticalAngle: number,
    horizontalResolution: number,
    verticalResolution: number
  ) {
    const horizontalAngleRad = horizontalAngle * (Math.PI / 180)
    const verticalAngleRad = verticalAngle * (Math.PI / 180)
    return new ViewManager(
      horizontalAngleRad,
      verticalAngleRad,
      horizontalResolution,
      verticalResolution
    )
  }

  public static newViewFromRadians(
    horizontalAngle: number,
    verticalAngle: number,
    horizontalResolution: number,
    verticalResolution: number
  ) {
    return new ViewManager(
      horizontalAngle,
      verticalAngle,
      horizontalResolution,
      verticalResolution
    )
  }

  private constructor(
    horizontalAngleRad: number,
    verticalAngleRad: number,
    horizontalResolution: number,
    verticalResolution: number
  ) {
    this.horizontalAngleRad = horizontalAngleRad
    this.verticalAngleRad = verticalAngleRad
    this.horizontalResolution = horizontalResolution
    this.verticalResolution = verticalResolution
    this.horizontalDelta = this.horizontalAngleRad / this.horizontalResolution
    this.verticalDelta = this.verticalAngleRad / this.verticalResolution
  }

  public rayDirectionMatrixFromPitchYaw(pitch: number, yaw: number) {
    const matrix: Vec3[][] = []
    for (let i = 0; i < this.horizontalResolution; i++) {
      matrix.push([])
      for (let j = 0; j < this.verticalResolution; j++) {
        matrix[i].push(
          getViewDirection(
            pitch - i * this.horizontalDelta,
            yaw - j * this.verticalDelta
          )
        )
      }
    }
    return matrix
  }
}

export const defaultView = ViewManager.newViewFromDegrees(90, 30, 90, 30)
