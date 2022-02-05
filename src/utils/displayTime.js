export const displayTime = time => {
  const timeAgo = Date.now() - time * 1000
  const minutesAgo = timeAgo / (1000 * 60)
  const hoursAgo = minutesAgo / 60
  const daysAgo = hoursAgo / 24
  if (minutesAgo < 60) {
    return Math.round(minutesAgo)+" minutes ago"
  } else if (hoursAgo < 24) {
    return Math.round(hoursAgo)+" hours ago"
  } else if (hoursAgo >= 24) {
    return Math.round(daysAgo)+" days ago"
  } else {
    return "some time ago"
  }
}
