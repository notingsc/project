// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usrList: [{
      id: 1,
      txt: '我的文档1',
      num: 17,
      image: "../../static/img/599a521472424.jpg"
      // image:"https://i.loli.net/2017/08/21/599a521472424.jpg"
    }, {
      id: 2,
      txt: '我的文档2',
      num: 27,
      image: "../../static/img/599a521472424.jpg"
      // image:"https://i.loli.net/2017/08/21/599a521472424.jpg"
    }, {
      id: 3,
      txt: '我的文档3',
      num: 37,
      // image: "https://file.iviewui.com/dist/2054f5af8012b54926ed6b5cfd1f166c.svg"
      image: "https://i.loli.net/2017/08/21/599a521472424.jpg"
    }, ],
    listdata: ''
  },
  goDetail: function (event) {
    let id = event.currentTarget.dataset.index + 1;
    let txt = event.currentTarget.dataset.txt;
    console.log(event.currentTarget.dataset.txt)
    let image = event.currentTarget.dataset.image;
    wx.navigateTo({
      url: '../usrDetail/usrDetail?id=' + id + "&txt=" + txt + "&image=" + image,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.request({
    //   url: 'http://v.juhe.cn/weather/index?cityname=%E5%8D%97%E5%AE%81&dtype=&format=&key=93a8996232179c3acbf885090246b8b3',
    //   url:'http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=93a8996232179c3acbf885090246b8b3',
    //   url: 'http://apis.juhe.cn/cook/query?key=&menu=%E8%A5%BF%E7%BA%A2%E6%9F%BF&rn=10&pn=3',
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     console.log(res.data.result.today),
    //       that.setData({
    //         listdata: res.data.result.today,
    //       })
    //   }
    // })
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