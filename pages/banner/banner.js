// pages/banner/banner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: '../../images/38c64b1837ae8369e2f9957c2b0538bc.png' },
      { url: '../../images/16ab4d030a171b82dfc28bcf84abdad9.jpg' },
      { url: '../../images/d05a5c0ddcb101ad043e87a0f6436b8b.jpg' }
    ],
    width:wx.getSystemInfoSync().windowWidth ,
    height: wx.getSystemInfoSync().windowHeight   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  setTimeout(function(){
    wx.redirectTo({
      url: '../index/index',
     
    })
  },3000);
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