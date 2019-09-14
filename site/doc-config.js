const github = "";
export default {
  "zh-CN": {
    header: {
      logo: {
        image: "https://img.yzcdn.cn/vant/logo.png",
        title: "Vant",
        href: "#/"
      },
      nav: {
        lang: {
          text: "En",
          from: "zh-CN",
          to: "en-US"
        },
        logoLink: [
          {
            image: "https://b.yzcdn.cn/vant/logo/weapp.svg",
            url: "/vant-weapp"
          },
          {
            image: "https://b.yzcdn.cn/vant/logo/github.svg",
            url: github
          }
        ]
      }
    },
    nav: [
      {
        name: "组件",
        showInMobile: true,
        children: [
          {
            name: "基础组件",
            icon: "https://img.yzcdn.cn/vant/basic-0401.svg",
            children: [
              {
                path: "/button",
                name: "Button 按钮"
              },
              {
                path: "/cell",
                name: "Cell 单元格"
              },
              {
                path: "/header",
                name: "Header 顶部导航栏"
              },
              {
                path: "/switch",
                name: "Switch 开关"
              },
              {
                path: "/search",
                name: "search 搜索框"
              }
            ]
          },

          {
            name: "营销组件",
            icon: "https://img.yzcdn.cn/vant/form-0401.svg",
            children: [
              {
                path: "/wheel",
                name: "大转盘"
              }
            ]
          }
        ]
      }
    ]
  },

  "en-US": {
    header: {
      logo: {
        image: "https://img.yzcdn.cn/vant/logo.png",
        title: "Vant",
        href: "#/"
      },
      nav: {
        lang: {
          text: "中文",
          from: "en-US",
          to: "zh-CN"
        },
        logoLink: [
          {
            image: "https://b.yzcdn.cn/vant/logo/github.svg",
            url: github
          }
        ]
      }
    },
    nav: [
      {
        name: "Components",
        showInMobile: true,
        children: [
          {
            name: "Basic Components",
            icon: "https://img.yzcdn.cn/vant/basic-0401.svg",
            children: [
              {
                path: "/button",
                name: "Button"
              },
              {
                path: "/cell",
                name: "Cell"
              }
            ]
          }
        ]
      }
    ]
  }
};
