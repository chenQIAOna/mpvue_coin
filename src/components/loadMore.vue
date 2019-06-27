<template>
    <div class="loadmore" v-show='showThis' @click="clickMore">
        <img v-show="showIcon" class="icon" :class="{'active':showIcon}" src="../../static/images/timg.gif" alt="">
        <span class="loadmore_text">{{text}}</span>
    </div>
</template>
<script>
export default {
       /**
     * 组件的属性列表
     */
    props: {
        hasMore: {
            type: Boolean,
            default: false
        },
        // 加载中的显示文本
        loadingText: {
            type: String,
            default: '加载中...'
        },
        // 加载失败的显示文本
        failText: {
            type: String,
            default: '加载失败, 请点击重试!'
        },
        // 没有更多后的显示文本, 默认没有则隐藏加载更多控件
        finishText: {
            type: String,
            default: '没有更多数据了'
        },
        // 列表渲染延时, 默认为 500 ms
        // ps 如果能监听setData() 渲染结束的话则可以不需要延时 
        listRenderingDelay: {
            type: Number,
            default: 500
        },
        //每页默认加载数量
        pageCur:{
            type: Number,
            default: 20
        }
    },

    data() {
        return{
            showThis: false,
            text: '',
            showIcon: false,
            isLoading: false,
        }
    },

    methods:{
        //加载更多的入口方法, 直接在page中使用时请在onReachBottom() 方法中调用这个方法, 并实现loadMoreListener方法去获取数据
        loadMore: function () {
            if (!this.hasMore) {
                //console.log('load more finish')
                return
            }
            if (this.isLoading) {
                //console.log('loading ...')
                return
            }
            this.isLoading = true;

            this.triggerEvent('loadMoreListener')
        },
        //加载完成, 传入hasMore 
        loadMoreComplete: function (length) {
            var hasMore = length < this.pageCur;
            var text = '', showThis = false, showIcon = false;

            if (!hasMore) {
                showIcon = true
                showThis = true
                text = this.loadingText
            } else if (this.finishText.length > 0) {
                text = this.finishText
                showThis = true
            }
            this.showIcon = showIcon;
            this.text = text;
            this.showThis = showThis;

            //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
            setTimeout(function () {
                this.isLoading = false;
            }.bind(this), this.listRenderingDelay)
        },
        // 加载失败
        loadMoreFail: function () {
            this.showIcon = false;
            this.text = this.failText

            //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
            setTimeout(function () {
                this.isLoading = false;
            }.bind(this), this.listRenderingDelay)
        },
        //点击 loadmore 控件时触发, 只有加载失败时才会进入页面回调方法
        clickLoadMore: function () {
            if (this.text != this.failText) return
            this.showIcon = true;
            this.text = this.loadingText;
            this.isLoading = true;
            this.triggerEvent('clickLoadMore')
        }
    }

}
</script>

<style lang="scss">
/* pages/components/loadMore/loadMore.wxss */
.loadmore {
    height: 50rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #232234;
    padding: 20rpx;
  }
  
  .loadmore_text{
    font-size:26rpx;
    color: #bfbfbf;
    font-weight: bold;
    opacity: .6;
  }
  
  .icon{
    width: 42rpx;
    height: 42rpx;
    margin-right: 10rpx;
  }

  .loadmore .active {
    animation: weuiLoading 0.6s steps(12, end) infinite;
  }

  @keyframes weuiLoading {
    0% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  
    100% {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
</style>


