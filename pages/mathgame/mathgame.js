const app = getApp()
var rpn = require("../../utils/rpn.js");
var total_micro_second = 5 * 1000;
Page({
  data: {
    clock: '',
    count: 0, 
    count2: 0,
    countTimer: null,
    countTimer2: null,
    id1: "1",
    id2: "2",
    id3: "3",
    id4: "4",
    id5: "5",
    id6: "6",
    id7: "7",
    id8: "8",
    id9: "9",
    id10: "0",
    id11: "clear",
    id12: "=",
    screenData: "0",
    lastIsOperator: false,
    logs: [],
    ninenine: ["1 × 1 =", "1 × 2 =", "1 × 3 =", "1 × 4 =", "1 × 5 =", "1 × 6 =", "1 × 7 =", "1 × 8 =", "1 × 9 =", 
               "2 × 1 =", "2 × 2 =", "2 × 3 =", "2 × 4 =", "2 × 5 =", "2 × 6 =", "2 × 7 =", "2 × 8 =", "2 × 9 =", 
               "3 × 1 =", "3 × 2 =", "3 × 3 =", "3 × 4 =", "3 × 5 =", "3 × 6 =", "3 × 7 =", "3 × 8 =", "3 × 9 =",
               "4 × 1 =", "4 × 2 =", "4 × 3 =", "4 × 4 =", "4 × 5 =", "4 × 6 =", "4 × 7 =", "4 × 8 =", "4 × 9 =",
               "5 × 1 =", "5 × 2 =", "5 × 3 =", "5 × 4 =", "5 × 5 =", "5 × 6 =", "5 × 7 =", "5 × 8 =", "5 × 9 =",
               "6 × 1 =", "6 × 2 =", "6 × 3 =", "6 × 4 =", "6 × 5 =", "6 × 6 =", "6 × 7 =", "6 × 8 =", "6 × 9 =",
               "7 × 1 =", "7 × 2 =", "7 × 3 =", "7 × 4 =", "7 × 5 =", "7 × 6 =", "7 × 7 =", "7 × 8 =", "7 × 9 =",
               "8 × 1 =", "8 × 2 =", "8 × 3 =", "8 × 4 =", "8 × 5 =", "8 × 6 =", "8 × 7 =", "8 × 8 =", "8 × 9 =",
               "9 × 1 =", "9 × 2 =", "9 × 3 =", "9 × 4 =", "9 × 5 =", "9 × 6 =", "9 × 7 =", "9 × 8 =", "9 × 9 ="],
    ans: ["1","2","3","4","5","6","7","8","9",
          "2","4","6","8","10","12","14","16","18",
          "3","6","9","12","15","18","21","24","27",
          "4","8","12","16","20","24","28","32","36",
          "5","10","15","20","25","30","35","40","45",
          "6","12","18","24","30","36","42","48","54",
          "7","14","21","28","35","42","49","56","63",
          "8","16","24","32","40","48","56","64","72",
          "9","18","27","36","45","54","63","72","81"],
    nineninealgo: "",
    ninenineans: "",
    random: Math.floor(Math.random() * 81)
  },
  onLoad: function () {
    this.setData({
      nineninealgo: this.data.ninenine[this.data.random],
      ninenineans: this.data.ans[this.data.random]
    })
  },
  onUnload: function () {
    clearInterval(this.countTimer);
    clearInterval(this.countTimer2);
  },
  drawProgressbg: function () {
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(1);// 设置圆环的宽度
    ctx.setStrokeStyle('#20183b'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath();//开始一个新的路径
    ctx.arc(50, 50, 46, 0, 2 * Math.PI, false);
    ctx.stroke();//对当前路径进行描边
    ctx.draw();

    var ctx = wx.createCanvasContext('canvasProgressbg2')
    ctx.setLineWidth(1);// 设置圆环的宽度
    ctx.setStrokeStyle('#20183b'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath();//开始一个新的路径
    ctx.arc(50, 50, 46, 0, 2 * Math.PI, false);
    ctx.stroke();//对当前路径进行描边
    ctx.draw();
  },
  onReady: function () {
    this.drawProgressbg();
    this.countInterval();
    this.countInterval2();
    this.countdown();
  },
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(94, 47, 47, 94);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#40ED94");
    gradient.addColorStop("1.0", "#5956CC");

    context.setLineWidth(4);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(50, 50, 46, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },

  drawCircle2: function(step) {
    var context = wx.createCanvasContext('canvasProgress2');
    var gradient = context.createLinearGradient(94, 47, 47, 94);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#40ED94");
    gradient.addColorStop("1.0", "#5956CC");

    context.setLineWidth(4);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(50, 50, 46, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },

  countInterval: function () {
    this.countTimer = setInterval(() => {
      if (this.data.count <= 50) {
        /* 绘制彩色圆环进度条  
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 50 对应 2 做处理，计数器count=50的时候step=2
        */
        this.drawCircle(this.data.count / (50 / 2));
        this.data.count++;
      } else {
        var rand = Math.floor(Math.random() * 81);
        total_micro_second = 5 * 1000;
        this.setData({
          random: rand,
          nineninealgo: this.data.ninenine[rand],
          ninenineans: this.data.ans[rand],
          screenData: 0,
          count: 0,
          countTimer: null
        });
      }
    }, 100)
  },

  countInterval2: function() {
    this.countTimer2 = setInterval(() => {
      if (this.data.count2 <= 50 * 10) {
        this.drawCircle2(this.data.count2 / (50 * 10 / 2));
        this.data.count2++;
      } else {
        this.setData({
        });
        clearInterval(this.countTimer2);
      }
    }, 100)
  },

  clickButton: function (event) {
    console.log(event);
    var data = this.data.screenData.toString();
    var id = event.target.id;
    var rand = this.data.rand;
    if (id != this.data.id12 && id != this.data.id11) {
      data = data + id;
      if (data.substring(0, 1) == 0) {
        data = data.substring(1, data.length);
      }
    } else if (id == this.data.id11) {
      data = 0;
    } else if (id == this.data.id12){
      if (data == this.data.ninenineans) {
        
      }
      rand = Math.floor(Math.random() * 81);
      this.setData({
        random: rand,
        nineninealgo: this.data.ninenine[rand],
        ninenineans: this.data.ans[rand],
        count: 0,
        countTimer: null
      })
      data = 0;
      total_micro_second = 5 * 1000;
    }

    this.setData({
      screenData: data
    })
  },

  countdown: function() {
    var self = this;
    this.setData({
      clock: this.dateformat(total_micro_second)
    });
    if (total_micro_second <= 0) {
      this.setData({
        clock: "下一题"
      });
      return;
    }
    setTimeout(function () {
      total_micro_second -= 10;
      self.countdown();
    }
      , 10)
  },

  dateformat: function(micro_second) {
    // 秒数
    var second = Math.floor(micro_second / 1000);
    // 小时位
    var hr = Math.floor(second / 3600);
    // 分钟位
    var min = Math.floor((second - hr * 3600) / 60);
    // 秒位
    var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;
    // 毫秒位，保留2位
    var micro_sec = Math.floor((micro_second % 1000) / 10);
    // return hr + ":" + min + ":" + sec + " " + micro_sec;
    return sec + "." + micro_sec + "s";
  }
}); 