// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,
    curIndex: 0,
    cateItems: [{
        id: 1,
        name: '洗护',
        children: [{
            child_id: 1,
            name: '洁面皂',
            image: "https://i.loli.net/2017/08/21/599a521472424.jpg"
          },
          {
            child_id: 2,
            name: '卸妆',
            image: "https://i.loli.net/2017/08/21/599a521472424.jpg"
          }
        ]
      },
      {
        id: 2,
        name: '生鲜',
        children: [{
          child_id: 1,
          name: '柚子',
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg"
        },
        {
          child_id: 2,
          name: '龙虾',
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg"
        }
      ]
      },
      {
        id: 3,
        name: '食品'
      },
      {
        id: 4,
        name: '女装'
      },
      {
        id: 5,
        name: '百货'
      },
      {
        id: 6,
        name: '母婴'
      },
      {
        id: 7,
        name: '手机'
      },
      {
        id: 8,
        name: '鞋靴'
      },
      {
        id: 9,
        name: '运动'
      },
      {
        id: 10,
        name: '美家'
      },
      {
        id: 11,
        name: '男装'
      },
      {
        id: 12,
        name: '水果'
      },
      {
        id: 13,
        name: '电子'
      }
    ],
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
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