// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图的数据
    swiperData: [],
    // 存放导航栏数据
    navData: [],
    // 存放层楼数据
    levelData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载完毕后获取轮播图数据放到swiperData中
    let _this = this
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success(res) {
        _this.setData({
          swiperData: res.data.message
        })
      }
    })
    // 页面加载完毕后获取导航图数据放到navData中
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success(res) {
        _this.setData({
          navData: res.data.message
        })
      }
    })
    // 页面加载完毕后获取层楼数据放到levelData中
    wx.request({
      url: "https://api.zbztb.cn/api/public/v1/home/floordata",
      success(res) {
        _this.setData({
          levelData: res.data.message
        })
        console.log(_this.data);
        
      }
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