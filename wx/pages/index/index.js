//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    navList: [{
      id: 1,
      image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
      name: '生鲜'
    },{
      id: 2,
      image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
      name: '百货'
    },{
      id: 3,
      image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
      name: '食品'
    },{
      id: 4,
      image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
      name: '手机'
    },{
      id: 5,
      image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
      name: '运动'
    }],
    list: [{
      title: "qwe",
      num: 52133
    }, {
      title: "qwer",
      num: 613242
    }, {
      title: "qwert",
      num: 7435464
    }, {
      title: "qwerty",
      num: 847578
    }]
  },
  //事件处理函数
  goList: function (event) {
    var id = event.currentTarget.dataset.index + 1;
    // console.log(event.currentTarget.dataset.index)
    var title = event.currentTarget.dataset.title;
    // console.log(event.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../list/list?id=' + id + "&title=" + title
    })
  },
})