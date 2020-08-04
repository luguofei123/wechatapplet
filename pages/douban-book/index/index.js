// pages/left/left.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        total:20,
        bookerror:false,
        isfresh:false,
        bookarr:[
          {
            bookname: "php指南",
            price: "100元",
            time: "2012-09-09",
            id:1,
            bookurl:"https://img3.doubanio.com\/spic\/s26520855.jpg"
          },
          {
            bookname: "vue深入浅出",
            price: "100元",
            time: "2013-09-09",
            id:2,
            bookurl:"https://img3.doubanio.com\/spic\/s26520855.jpg"
          },
          {
            bookname: "php指南",
            price: "100元",
            time: "2012-09-09",
            id: 3,
            bookurl: "https://img3.doubanio.com\/spic\/s26520855.jpg"
          },
          {
            bookname: "vue深入浅出",
            price: "100元",
            time: "2013-09-09",
            id: 4,
            bookurl: "https://img3.doubanio.com\/spic\/s26520855.jpg"
          }, {
            bookname: "php指南",
            price: "100元",
            time: "2012-09-09",
            id: 5,
            bookurl: "https://img3.doubanio.com\/spic\/s26520855.jpg"
          },
          {
            bookname: "vue深入浅出",
            price: "100元",
            time: "2013-09-09",
            id: 6,
            bookurl: "https://img3.doubanio.com\/spic\/s26520855.jpg"
          },
          {
            bookname: "php指南",
            price: "100元",
            time: "2012-09-09",
            id: 7,
            bookurl: "https://img3.doubanio.com\/spic\/s26520855.jpg"
          },
          {
            bookname: "vue深入浅出",
            price: "100元",
            time: "2013-09-09",
            id: 8,
            bookurl: "https://img3.doubanio.com\/spic\/s26520855.jpg"
          }

        ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载");
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
    console.log("下啦");
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    wx.request({
      url: '',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
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