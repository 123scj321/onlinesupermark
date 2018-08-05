// pages/product/productSearch/productSearch.js
const app = getApp()
const data = require("../../../data/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText:"",
    discountList: data.data.discountList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(data.data.productDetail)
     
    this.setData({ searchText: options.keyword});
    options.keyword == "水果" && this.setData({ discountList: data.data.productDetail.frash });
    options.keyword == "休闲食品" && this.setData({ discountList: data.data.productDetail.food });
    options.keyword == "家居生活" && this.setData({ discountList: data.data.productDetail.lift });
    options.keyword == "粮油调料" && this.setData({ discountList: data.data.productDetail.oil });
  },
  searchText:function(e){
    var val=e.detail.value;
    val == "水果" && this.setData({ discountList: data.data.productDetail.frash });
    val == "休闲食品" && this.setData({ discountList: data.data.productDetail.food });
    val == "家居生活" && this.setData({ discountList: data.data.productDetail.lift });
    val == "粮油调料" && this.setData({ discountList: data.data.productDetail.oil });
  }
})