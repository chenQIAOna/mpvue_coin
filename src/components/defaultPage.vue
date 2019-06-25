<template>
  <div class="default_container">
      <!-- 我的 -->
      <div class="default_box">
          <img class="default_box-mine" src="../../static/images/mine_default.png" alt="">
          <p class="mine-text">“从这里开始”</p>
          <p>我们一起探寻数字货币的死亡真相！</p>

      </div>
      <!-- 搜索 -->
      <div class="default_box">
          <img class="default_box-search" src="../../static/images/search_default.png" alt="">
          <p>这里找不到内容哦~</p>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .default_box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin-bottom: 18rpx;
        }
        .mine-text{
            color: #fff;
            font-size: 36rpx;
            padding-top: 20rpx;
        }
        &-mine{
          width: 304rpx;
          height: 246rpx;
        }
        &-search{
            width: 290rpx;
            height: 240rpx;
        }
        p{
            color: #A0A0A0;
            font-size: 26rpx;
            padding-top: 10rpx;
        }
    }
</style>

