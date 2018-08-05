// pages/product/banner/banner.js
const app = getApp();
const data = require("../../../data/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoIndex:0,
    logo: data.data.movies,
    nowImage:"",
    nowList: data.data.hotList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({nowImage: this.data.logo[options.key].url});
  if (options.key=='0'){
    this.setData({ nowList: data.data. discountList});
  } else if (options.key=='1'){
    this.setData({ nowList: data.data.hotList});
  }else{
    this.setData({ nowList: data.data.productDetail.drink});
  }
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