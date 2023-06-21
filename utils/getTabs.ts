export const getTabs = (interval = 30, total = 30): string[] => {
  if (total <= interval) {
    return [`1-${total}`]
  } else {
    const length = Math.ceil(total / interval)
    const remainder = total % interval
    return Array.from({ length }, (v, i) => {
      if (i + 1 === length) {
        if (remainder === 1) {
          return `${i * interval + 1}`
        }
        if (remainder === 0) {
          return `${i * interval + 1}-${(i + 1) * interval}`
        }
        return `${i * interval + 1}-${i * interval + remainder}`
      }
      return `${i * interval + 1}-${(i + 1) * 30}`
    })
  }
}
