export const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const radiansToDegrees = (angle: number) => (angle * 180) / Math.PI

export const degreesToRadians = (angle: number) => (angle * Math.PI) / 180
