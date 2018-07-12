var app = getApp()
Page({
  data: {
    url: {}
  },

  onLoad: function (options) {
    this.setData({
      url: options.url
    });
  }
})