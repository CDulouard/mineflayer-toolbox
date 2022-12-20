import { Vec3 } from 'vec3'

export const getViewDirection = (pitch: number, yaw: number) => {
  const cosPitch = Math.cos(pitch)
  const sinPitch = Math.sin(pitch)
  const cosYaw = Math.cos(yaw)
  const sinYaw = Math.sin(yaw)
  return new Vec3(-sinYaw * cosPitch, sinPitch, -cosYaw * cosPitch)
}

export const getBlock = (
  origin: Vec3,
  direction: Vec3,
  world: any,
  maxDistance = 256
) => {
  return world.raycast(origin, direction, maxDistance)
}

export const getBlockDistance = (
  origin: Vec3,
  direction: Vec3,
  world: any,
  maxDistance = 256
) => {
  const block = getBlock(origin, direction, world, maxDistance)
  return block != null ? origin.distanceTo(block.position) : maxDistance
}
