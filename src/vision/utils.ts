import { Vec3 } from 'vec3'

export const getViewDirection = (pitch: number, yaw: number) => {
  const cosPitch = Math.cos(pitch)
  const sinPitch = Math.sin(pitch)
  const cosYaw = Math.cos(yaw)
  const sinYaw = Math.sin(yaw)
  return new Vec3(-sinYaw * cosPitch, sinPitch, -cosYaw * cosPitch)
}

export const getBlock = (origin: Vec3, direction: Vec3, world: any) => {
  return world.raycast(origin, direction, 256)
}
