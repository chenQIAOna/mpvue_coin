<template>
    <div class="m-container">
        <!-- 个人信息 -->
        <div class="m-userInfo">
            <div class="m-userInfo_avatar pr">
                <img class="m-userInfo_avatar-img" src="../../../static/images/avatar.png" alt>
            </div>
            <span v-if="false" class="m-userInfo_userName">JONES爱曝光</span>
            <navigator class="m-userInfo_login">
                <span class="login_text">立即登录</span>
                <i class="iconfont icon-jiantou login_arrow"></i>
            </navigator>
        </div>
        <!-- 曝光历史 -->
        <div class="m-history">
            <!-- 标题 -->
            <div class="m-history_title">
                <span class="m-history_title-name">曝光历史</span>
                <div class="m-history_title-sort">
                    <button class="histoty_btn ">最新</button>
                    <button class="histoty_btn active">倒序</button>
                </div> 
            </div>
            <!-- 历史列表 -->
            <ul class="m-history_list">
                <li v-for="(item,index) in 10" :key="index" class="m-history_item">
                    <p class="m-history_item-title pr">Alpencoin</p>
                    <div class="m-history_item-content">
                        <span class="content_text">我的钱都砸进里面了，想不到网站停止运营了，这个可是我的老婆本啊。我要曝光这个不要脸的币种，大家千万别上当啊</span>
                        <img class="content_img" src="../../../static/images/mine_default.png" alt="">
                    </div>
                    <!-- 日期 -->
                    <p class="m-history_item-date">2018.10.07</p>
                </li>
            </ul>
        </div>
        <default-page :init-type="'other'"/>
    </div>
</template>

<script>
import defaultPage from "@/components/defaultPage";

export default {
    components: { defaultPage },

    data() {
        return {
            
        };
    },

    computed: {}
};
</script>
<style lang="scss" scoped>
/* 个人信息 */
.m-userInfo {
    margin: 20rpx 0rpx 70rpx 40rpx;
    display: flex;
    align-items: center;

    &_avatar {
        width: 166rpx;
        height: 166rpx;
        background:linear-gradient(180deg, #616481 0%, #3A3D59 100%);
        border-radius: 50%;
        margin-right: 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        &::after{
            content:'';
            display: block;
            width: 160rpx;
            height: 160rpx;
            background: #2f3045;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &-img{
            width: 138rpx;
            height: 138rpx;
            z-index: 99;
            border-radius: 50%;
            position: relative;
        }
    }
    &_userName {
        font-size: 32rpx;
        font-weight: bold;
        color: #fff;
    }
    &_login{
        height: 45rpx;
        color: #F2612B;
        display: flex;
        justify-content: center;
        padding: 10rpx;
        .login_text{
            font-size: 32rpx;
            display: block;
        }
        .login_arrow{
            display: flex;
            align-items: center;
            font-size: 28rpx;
            margin-left: 6rpx;
        }
    }
}
/* 曝光历史 */ 
.m-history{
    background:linear-gradient(135deg,rgba(53,55,81,1) 0%,rgba(42,43,61,1) 100%);
    border-radius:16rpx 16rpx 0rpx 0rpx;
    padding: 36rpx 30rpx;
    &_title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-name{
            font-size: 36rpx;
            line-height: 50rpx;
        }
        &-sort{
            width: 160rpx;
            height: 48rpx;
            background: #2A2B3D;
            display: flex;
            .histoty_btn{
                color: #fff;
                opacity: .4;
                font-size: 22rpx;
                flex: 1;
                border-radius: 8rpx;
            }
            .active{
                opacity:1;
                background: #5757FF;
            }
        }
    }
    /* 历史列表 */ 
    &_list{
        padding-left: 54rpx;
    }
    &_item{
        padding: 30rpx 0;
        border-bottom: 1rpx solid rgba(255,255,255,.1);
        &-title{
            font-size: 30rpx;
            font-weight: bold;
            color: #F2612B;
            &::before{
                content: '';
                display: block;
                width: 16rpx;
                height: 16rpx;
                border: 4rpx solid #F2612B;
                border-radius: 50%;
                position: absolute;
                left: -54rpx;
                top: 50%;
                transform: translateY(-50%)
            }
        }
        &-content{
            display: flex;
            margin: 10rpx 0 12rpx;
            .content_text{
                color: #CCCCCC;
                font-size: 26rpx;
                flex: 1;
            }
            .content_img{
                max-height: 148rpx;
                max-width: 148rpx;
                margin-left: 30rpx;
            }
        }
        &-date{
            font-size: 22rpx;
            color: #A0A0A0;
            line-height: 30rpx;
        }
    }

}


</style>



