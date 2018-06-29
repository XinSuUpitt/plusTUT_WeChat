// pages/categary/categary.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["小学", "中学"],
    currentNavtab: "0",
    feed: [],
    feedMiddle: [],
    feed_length: 0,
    feed_middle_length: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },

  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
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
  
  },
  bindQueTap: function (e) {
    var info;
    if (this.data.currentNavtab === "0") {
      info = JSON.stringify(this.data.feed);
    } else {
      info = JSON.stringify(this.data.feed_middle);
    }
    var idx = e.currentTarget.dataset.idx
    wx.navigateTo({
      url: '../class/class?info=' + info + '&&idx='+ idx
    })
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        //this.setData({
        //
        //});
        console.log(data);
      });
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function () {
    var feed = util.getElementary();
    var feed_middle = util.getMiddle();
    var feed_data = feed.data;
    var feed_middle_data = feed_middle.data;
    this.setData({
      feed: feed_data,
      feed_middle: feed_middle_data,
      feed_length: feed_data.length,
      feed_middle_length: feed_middle_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
  }
})