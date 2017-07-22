const AV = require('../../libs/av-weapp-min.js');

// todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todos: [],
    times: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    new AV.Query('BasicVar')
      .include('avatar') // avatar is an AV.File
      .get('597303e2128fe155ce5e6280')
      .then(times => this.setData({ times }))
      .catch(console.error);

    var todo = AV.Object.createWithoutData('BasicVar', '597303e2128fe155ce5e6280');
  
    todo.save().then(function (todo) {
      todo.increment('VisitTimes', 1);
      todo.fetchWhenSave(true);
      return todo.save();
    }).then(function (todo) {
      // 使用了 fetchWhenSave 选项，save 成功之后即可得到最新的 views 值
    }, function (error) {
      // 异常处理
    });
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