// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second: 5,
    time: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  time: function () {
    var _this = this;
    var s = _this.data.second;
    _this.setData({
      time: setInterval(() => {
        s--;
        if (s <= 0) {
          clearInterval(_this.data.time);
          wx.reLaunch({
            url: '../user/user',
          })
        } else {
          this.setData({
            second: s
          })
        }
      }, 1000)
    })
  },
  click: function () {
    wx.reLaunch({
      url: '../user/user'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.time();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面已经跳转")
    clearInterval(this.data.time);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})