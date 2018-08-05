//index.js
//获取应用实例
const app = getApp()
const data = require("../../data/data.js");
Page({
  data: {
      movies: data.data.movies,
      classList: data.data.classList,
      hotList: data.data.hotList,
      discountList: data.data.discountList,
      searchText:"" 
  },
  
  onLoad: function () {
    
  //  console.log(data);
  },
  skip:function(e){
    wx.navigateTo({
      url: e.currentTarget.id,
    })
  },
  goBanner:function(e){
    wx.navigateTo({
      url: '../product/banner/banner?key='+e.currentTarget.id,
    })
  },
  goProductList:function(e){
    //console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '../product/productList/productList?key=' + e.currentTarget.id,
    })
  },
  scrollHandler:function(e){
    console.log(e);
  },
  goSearch:function(e){
    console.log(e.detail.value);
    wx.navigateTo({
      url: '../product/productSearch/productSearch?keyword=' + e.detail.value,
    })
  }
})
