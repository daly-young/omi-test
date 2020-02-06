Object.defineProperty(exports, '__esModule', { value: true })
const util_1 = require('../../utils/util')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log =>
        util_1.formatTime(new Date(log))
      )
    })
  }
})
