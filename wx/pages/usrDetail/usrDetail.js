// pages/usrDetail/usrDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      name: '',
      phone: ''
    },
    length: 0,
    note: '',
    pickList: ['ex1', 'ex2', 'ex3'],
    pickValue: '',
    time: 60,
    showCode: false
  },
  // textarea
  note: function (e) {
    this.setData({
      note: e.detail.value,
      length: e.detail.value.length
    })
  },
  // picker
  picker: function (e) {
    this.setData({
      pickValue: this.data.pickList[e.detail.value]
    })
  },
  // switch
  switchChange: function (e) {
    console.log(e.detail.value)
  },
  // code
  getCode: function () {
    var that = this;
    that.setData({
      showCode: true
    })
    let times = setTimeout(function () {
      if (that.data.time != 0) {
        that.setData({
          time: that.data.time - 1
        })
        that.getCode()
      } else {
        that.setData({
          showCode: false,
          time: 60
        })
      }
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let txt = options.txt
    let image = options.image
    console.log(txt)
    this.setData({
      id: id,
      txt: txt,
      image: image
    });
  },

  goend: function () {
    wx.navigateTo({
      url: '../time/time',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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