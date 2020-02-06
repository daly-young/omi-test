Object.defineProperty(exports, '__esModule', { value: true })
const app = getApp()
Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    const _this = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = function(res) {
        _this.setData({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success(res) {
          app.globalData.userInfo = res.userInfo
          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
