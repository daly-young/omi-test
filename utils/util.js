Object.defineProperty(exports, '__esModule', { value: true })
const formatNumber = function(n) {
  const str = n.toString()
  return str[1] ? str : '0' + str
}
function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}
exports.formatTime = formatTime
