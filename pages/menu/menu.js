// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        type: "爆款必喝",
        list: [{
            cover: '/images/menu/01.jpg',
            title: '生椰拿铁',
            price: 9
          },
          {
            cover: '/images/menu/01.jpg',
            title: '丝绒拿铁',
            price: 19
          },
          {
            cover: '/images/menu/01.jpg',
            title: '可可拿铁',
            price: 9
          },
          {
            cover: '/images/menu/01.jpg',
            title: '厚乳拿铁',
            price: 9
          }
        ]
      },
      {
        type: "大师咖啡",
        list: [{
            cover: '/images/menu/02.jpg',
            title: '标准美式',
            price: 3
          },
          {
            cover: '/images/menu/02.jpg',
            title: '拿铁',
            price: 6
          },
          {
            cover: '/images/menu/02.jpg',
            title: '香草拿铁',
            price: 9
          },
          {
            cover: '/images/menu/02.jpg',
            title: '耶加雪菲-美式',
            price: 9
          }
        ]
      },
      {
        type: "季节限定",
        list: [{
            cover: '/images/menu/03.jpg',
            title: '樱花白巧瑞纳冰',
            price: 15
          },
          {
            cover: '/images/menu/03.jpg',
            title: '偷偷想你茉莉鸳鸯',
            price: 12
          },
          {
            cover: '/images/menu/03.jpg',
            title: '樱花拿铁',
            price: 12
          },
          {
            cover: '/images/menu/03.jpg',
            title: '樱花小铁',
            price: 12
          }
        ]
      },
      {
        type: "无咖啡因",
        list: [{
            cover: '/images/menu/04.jpg',
            title: '抹茶瑞纳冰',
            price: 12
          },
          {
            cover: '/images/menu/04.jpg',
            title: '抹茶好喝椰',
            price: 12
          },
          {
            cover: '/images/menu/04.jpg',
            title: '茉莉轻乳茶',
            price: 9
          },
          {
            cover: '/images/menu/04.jpg',
            title: '乌龙轻乳茶',
            price: 12
          }
        ]
      }
    ]
  },
  order:function(options){
    console.log(options.target.dataset.item);
    // 取list
    var list = wx.getStorageSync("list")||[];
    // 添加item进list
    list.push(item);
    // 保存list
    //使用wx.setStorageSync('key',value)保存本地缓存数据
    wx.setStorageSync("list",list);
    wx.showToast({
      title: '添加成功',
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})