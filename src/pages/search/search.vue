<template>
    <div class="s-container">
        <!-- 搜索框 -->
        <div class="s-search" url="../search/main">
            <input class="s-search_input" type="text" placeholder="挖坟，我们是专业的！">
            <i class="iconfont icon-ic-search s-search_icon"></i>
        </div>
        <!-- 热门标签 -->
        <div class="s-hot" v-if="false">
            <p class="s-hot_title">热门标签</p>
            <div class="s-hot_list">
                <navigator class="s-hot_item" v-for="(item,index) in 8" :index="index" :key="index">已跑路</navigator>
            </div>
        </div>

        <!-- 搜索列表 -->
        <div class="search_list">
            <p class="search_title">名称/代码</p>
            <li>
                <span class="search_list-text">Venturenic/VTN</span>
                <span class="iconfont icon-ic-enter search_list-icon"></span>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        };
    }
};
</script>
<style lang="scss" scoped>
    .s-container {
        padding: 20rpx 30rpx;
    }
    /* 搜索框 */
    .s-search {
        // margin-bottom: 64rpx;
        position: relative;

        &_input {
            height: 64rpx;
            line-height: 40rpx;
            background: rgba(42, 43, 61, 1);
            border-radius: 40rpx;
            padding-left: 72rpx;
            color: #f2612b;
            font-size: 28rpx;
            caret-color: white; /* input框光标颜色 */
        }
        &_icon {
            position: absolute;
            top: 50%;
            left: 30rpx;
            transform: translateY(-50%);
            color: #ccc;
        }
    }

    /* 热门标签 */
    .s-hot{
      margin: 80rpx 0 0 26rpx;
        &_title{
            font-size: 28rpx;
            color: #A0A0A0;
            margin-bottom: 12rpx;
        }
        &_list{
            display: flex;
            flex-wrap: wrap;
        }
        &_item{
            width: 100rpx;
            height: 48rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1rpx solid #F0DC72;
            color: #F0DC72;
            font-size: 22rpx;
            border-radius: 4rpx;
            margin-right: 20rpx;
            margin-bottom: 20rpx;
            &:nth-of-type(2){
                border: 1rpx solid #F2612B; 
                color: #F2612B;
            }
            &:nth-of-type(3){
                border: 1rpx solid #43C0DB; 
                color: #43C0DB;
            }
            &:nth-of-type(4){
                border: 1rpx solid #68D77B; 
                color: #68D77B;
            }
            &:nth-of-type(5){
                border: 1rpx solid #748DFF; 
                color: #748DFF;
            }
            &:nth-of-type(6){
                border: 1rpx solid #B99AF4; 
                color: #B99AF4;
            }
            &:nth-of-type(7){
                border: 1rpx solid #A0A0A0; 
                color: #A0A0A0;
            }
            &:nth-of-type(8){
                border: 1rpx solid #FF6999; 
                color: #FF6999;
            }
        } 
    }

    /* 搜索列表 */ 
    .search_list{
        font-size: 28rpx;
        color: #A0A0A0;
        margin: 30rpx 10rpx 0;
        .search_title{
            padding: 20rpx 30rpx;
            border-bottom: 1rpx solid rgba(255,255,255,.1);
        }
        li{
          padding: 32rpx 30rpx;
          border-bottom: 1rpx solid rgba(255,255,255,.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &-text{
            color: #A0A0A0;
        }
        &-icon{
          color: #A0A0A0;
        }
    }
</style>


