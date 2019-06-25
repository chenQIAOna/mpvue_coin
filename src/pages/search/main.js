import Vue from 'vue'
import App from './search'

const app = new Vue(App)
app.$mount()
export default {
    config:{
        "navigationBarTitleText": "搜索"
    }
}