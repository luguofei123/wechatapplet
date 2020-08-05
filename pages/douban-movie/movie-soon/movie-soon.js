// pages/left/left.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMore: false,
    showLoading: true,
    loadMoreLoading: false,
    films:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载22");
    var that = this
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    wx.request({
      url: 'http://127.0.0.1:3000/laterMovie',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        that.setData({
          films: res.data,
          showLoading: false,
          hasMore: false,
          loadMoreLoading: false
        })
      },
      fail: function () {
        console.log("错误");
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("生命周期函数--监听页面显示");

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
    console.log("上啦");
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("用户点击右上角分享");
  },
  searchBook:function(){
    console.log("111");
    this.setData({
      bookerror:true
    })
  },
  searchkey:function(e){

    console.log(e.detail.value);
  },
  moreload:function(){
   console.log("底部")
  },
  scroll:function(){
       console.log("滚动");
  },
  topload:function(){
    console.log("顶部");
  },
  showdetail:function(e){

    console.log(e);
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })

  }

  
})