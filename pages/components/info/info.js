// info.js
Page({
  data: {
    developer: {
      name: "郭朝阳",
      email: "subs0513@outlook.com",
      github: "https://github.com/Subs0513",
    },
    project: {
      title: "皮皮的智能展示系统",
      team:"扬州大学",
      description: "一个简单的商品推荐系统",
      version: "1.0.3",
      technologies: ["微信小程序", "JavaScript", "Node.js"]
    }
  },

  onLoad() {
    // Initialize any data or perform actions when the page loads
    console.log("Info page loaded");
  },

  copyEmail() {
    wx.setClipboardData({
      data: this.data.developer.email,
      success: () => {
        wx.showToast({
          title: "Email copied!",
          icon: "success"
        });
      }
    });
  }
});
