import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        "pages": [
            "pages/mine/main",
            "pages/index/main",
            "pages/exposure/main",
        ],
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#232234",
            "backgroundColor": "#232234",
            "navigationBarTitleText": "死亡币记",
            "navigationBarTextStyle": "white"
        },
        "tabBar": {
            "color": "#4C4C4C",
            "backgroundColor": "#1A1A26",
            "selectedColor": "#F2612B",
            "borderStyle": "black",
            "list": [
                {
                    "text": "发现",
                    "pagePath": "pages/index/main",
                    "iconPath": "static/tabs/discover.png",
                    "selectedIconPath": "static/tabs/discover-active.png"
                },
                {
                    "text": "曝光",
                    "pagePath": "pages/exposure/main",
                    "iconPath": "static/tabs/exposure.png",
                    "selectedIconPath": "static/tabs/exposure-active.png"
                },
                {
                    "text": "我的",
                    "pagePath": "pages/mine/main",
                    "iconPath": "static/tabs/mine.png",
                    "selectedIconPath": "static/tabs/discover-active.png"
                }
            ],
            "position": "bottom"
        },
        "permission": {
            "scope.userLocation": {
                "desc": "你的位置信息将用于小程序学习使用"
            }
        }
    }
}