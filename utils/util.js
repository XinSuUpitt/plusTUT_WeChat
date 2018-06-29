const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

var index = require('../data/data_index.js')
var index_next = require('../data/data_index_next.js')
var discovery = require('../data/data_discovery.js')
var discovery_next = require('../data/data_discovery_next.js')
var elementary = require('../data/data_categary_elementary.js')
var middle = require('../data/data_categary_middle.js')
var video = require('../data/data_video.js')
var myclass = require('../data/data_account_myclass.js')
var myFavorateClass = require('../data/data_account_myfavoriteclass.js')

function getData(url) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getData2() {
  return index.index;
}

function getNext() {
  return index_next.next;
}

function getDiscovery() {
  return discovery.discovery;
}

function discoveryNext() {
  return discovery_next.next;
}

function getElementary() {
  return elementary.elementary;
}

function getMiddle() {
  return middle.middle;
}

function getVideo() {
  return video.video;
}

function getMyClass() {
  return myclass.myclass;
}

function getMyFavorateClass() {
  return myFavorateClass.myFavorateClass
}



module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;
module.exports.getElementary = getElementary;
module.exports.getMiddle = getMiddle;
module.exports.getVideo = getVideo;
module.exports.getMyClass = getMyClass;
module.exports.getMyFavorateClass = getMyFavorateClass;
