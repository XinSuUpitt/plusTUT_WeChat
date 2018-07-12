// pages/categary/categary.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var info = JSON.parse(options.info);
    var idx = options.idx;
    // this.setData({
    //   info: info[idx]
    // });
    wx.request({
      url: 'http://localhost:3000/api/get_classes',
      method: 'GET',
      success: function (res) {
        console.log('elementary classes', res.data)
        that.setData({
          info: res.data[0] //设置数据
        })
      },
      fail: function (err) {
        console.log('error', err)
      }
    })
  }
})