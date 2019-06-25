<template>
    <div class="m-container">
        <!-- 个人信息 -->
        <div class="m-userInfo">
            <div class="m-userInfo_avatar">
                <img class="m-userInfo_avatar-img" src="../../../static/images/avatar.png" alt>
            </div>
            <span class="m-userInfo_userName">JONES爱曝光</span>
        </div>
        <!-- 曝光历史 -->
        <div class="m-history">
            <div class="m-history_title">
                <span class="m-history_title-name">曝光历史</span>
                <div class="m-history_title-sort">
                    <button class="histoty_btn ">最新</button>
                    <button class="histoty_btn active">倒序</button>
                </div> 
            </div>
        </div>
        <!-- <default-page/> -->
    </div>
</template>

<script>
import defaultPage from "@/components/defaultPage";

export default {
    components: { defaultPage },

    data() {
        return {};
    },

    computed: {}
};
</script>
<style lang="scss" scoped>
/* m-history */
.m-userInfo {
    margin: 20rpx 0rpx 70rpx 40rpx;
    display: flex;
    align-items: center;

    &_avatar {
        width: 166rpx;
        height: 166rpx;
        background:linear-gradient(180deg, #616481 0%, #3A3D59 100%);
        // background: red;
        border-radius: 50%;
        margin-right: 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
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
            z-index: 999;
            border-radius: 50%;
        }
    }
    &_userName {
        font-size: 32rpx;
        font-weight: bold;
        color: #fff;
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
                line-height: 48rpx;
                color: #fff;
                opacity: .4;
                font-size: 22rpx;
                padding: 0;
                flex: 1;
            }
            .active{
                opacity:1;
                background: #5757FF;
                border-radius: 8rpx;
            }
        }
    }
}
</style>



