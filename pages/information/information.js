const app = getApp()
var util = require('../../utils/util.js')

Page({
  data:{
    markers: [{
      id: 0,
      latitude: 22.521677,
      longitude: 114.055122,
      width: 30,
      height: 30,
      iconPath: "../../imgs/marker.png"
    }],
    feed: [],
    feed_length: 0
  },
  onLoad: function () {
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  refresh: function () {
    var feed = util.getInformationTeacher();
    var feed_data = feed.data;
    console.log("dta", feed);
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  bindItemTap: function () {
    wx.openLocation({
      latitude: 22.521677,
      longitude: 114.055122,
      name: "plusTuT",
      address: "广东省深圳市海悦华城a座3502室",
      scale: 1
    })
  },
  bindPhoneTap: function() {
    wx.makePhoneCall({
      phoneNumber: '18902430450'
    })
  }
})