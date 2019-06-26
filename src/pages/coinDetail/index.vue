<template>
    <div class="cd-container">
        <div class="cd-main pr">
            <!-- css写出来的图片效果 -->
            <div class="cd-main_imgbox">
                <!-- 融资 -->
                <div v-if="false" class="cd-main_imgbox_iconBg">
                    <i class="iconfont icon-rongzi cd-main_imgbox_icon"></i>
                </div>
                <!-- 恶搞 -->
                <div v-if="false" class="cd-main_imgbox_iconBg bg2">
                    <i class="iconfont icon-egao cd-main_imgbox_icon"></i>
                </div>
                <!-- 骗局 -->
                <div v-if="false" class="cd-main_imgbox_iconBg bg3">
                    <i class="iconfont icon-pianju cd-main_imgbox_icon"></i>
                </div>
                <!-- 遗弃 -->
                <div class="cd-main_imgbox_iconBg bg4">
                    <i class="iconfont icon-yiqi cd-main_imgbox_icon"></i>
                </div>

            </div>
            <!-- 排序 -->
            <div class="cd-main_sort">
                <div class="cd-main_sort_btnbox">
                    <button class="histoty_btn ">最新</button>
                    <button class="histoty_btn active">倒序</button>
                </div>
            </div>

            <div class="d-exposure_list">
                <!-- 每一项开始 -->
                <div class="d-exposure_item">
                    <p class="d-exposure_item-date pr">2018.08.31</p>
                    <ul class="d-exposure_item_ul">
                        <!-- 每一项中每一列 -->
                        <li
                            v-for="(item, index) in 3"
                            :key="index"
                            class="d-exposure_item_li"
                            @click="toExposureDetail"
                        >
                            <div class="d-exposure_item_li-left">
                                <div class="d-exposure_item_li-left_des">
                                    <span class="des_title">名称</span>
                                    <span class="des_name">VYIGRAT</span>
                                </div>
                                <div class="d-exposure_item_li-left_des">
                                    <span class="des_title">代码</span>
                                    <span class="des_name color_white">VYI</span>
                                </div>
                                <div class="d-exposure_item_li-left_des">
                                    <span class="des_title">分类</span>
                                    <span class="des_name color_white">融资死亡币</span>
                                </div>
                            </div>
                            <div class="d-exposure_item_li-right">
                                <button class="rightBtn">已曝光</button>
                                <button class="rightBtn">已跑路</button>
                                <button class="rightBtn">已破获</button>
                                <button class="rightBtn">已判决</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 每一项结束 -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.cd-container {
    background: #f87618;
    height: 100%;
    padding-top: 112rpx;
}
.cd-main {
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    background: #232234;
    padding: 30rpx;
    /* 圆圈 */
    &_imgbox {
        width: 168rpx;
        height: 168rpx;
        border-radius: 50%;
        background: linear-gradient(
            180deg,
            rgba(62, 60, 95, 1) 0%,
            rgba(35, 34, 52, 1) 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12rpx;
        position: absolute;
        top: -84rpx;
        left: 40rpx;
        &::before {
            content: "";
            display: block;
            width: 160rpx;
            height: 160rpx;
            border-radius: 50%;
            background: linear-gradient(
                180deg,
                rgba(120, 120, 120, 1) 0%,
                rgba(67, 67, 67, 1) 100%
            );
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &::after {
            content: "";
            display: block;
            width: 143rpx;
            height: 143rpx;
            border-radius: 50%;
            background: #232234;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &_iconBg {
            z-index: 9999;
            width: 90rpx;
            height: 90rpx;
            border-radius: 50%;
            background: linear-gradient(
                135deg,
                rgba(251, 130, 28, 1) 0%,
                rgba(234, 69, 8, 1) 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .bg2 {
            background: linear-gradient(
                180deg,
                rgba(255, 217, 83, 1) 0%,
                rgba(255, 178, 41, 1) 100%
            );
        }
        .bg3 {
            background: linear-gradient(
                135deg,
                rgba(110, 226, 224, 1) 0%,
                rgba(36, 160, 144, 1) 100%
            );
        }
        .bg4 {
            background: linear-gradient(
                135deg,
                rgba(173, 173, 173, 1) 0%,
                rgba(68, 68, 68, 1) 100%
            );
        }

        &_icon {
            font-size: 56rpx;
            font-weight: bold;
            color: #232234;
        }
    }

    /* 排序 */
    &_sort {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 50rpx;
        &_btnbox{
            display: flex;
            width: 160rpx;
            height: 48rpx;
            background: #2a2b3d;
            border-radius: 8rpx;
        }
        .histoty_btn {
            color: #fff;
            opacity: 0.4;
            font-size: 22rpx;
            flex: 1;
            border-radius: 8rpx;
        }
        .active {
            opacity: 1;
            background: #5757ff;
        }
    }
}

/* 最新曝光 */
.d-exposure {
    &_title {
        margin-bottom: 30rpx;
    }
    &_item {
        &-date {
            font-size: 24rpx;
            opacity: 0.56;
            padding-left: 20rpx;
            &::before {
                width: 10rpx;
                height: 10rpx;
                display: block;
                content: "";
                background: rgba(234, 69, 8, 1);
                border-radius: 50%;
                position: absolute;
                left: -1rpx;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        &_ul {
            padding: 16rpx 0 56rpx 16rpx;
            border-left: 2rpx solid rgba(255, 255, 255, 0.1);
            margin-left: 2rpx;
        }
        &_li {
            display: flex;
            background: linear-gradient(
                315deg,
                rgba(61, 62, 92, 1) 0%,
                rgba(42, 43, 61, 1) 100%
            );
            border-radius: 8rpx;
            padding: 25rpx 0;
            margin-bottom: 12rpx;
            &:nth-last-child(1) {
                margin-bottom: 0;
            }
            &-left {
                flex: 1;
                padding: 0 34rpx 0 26rpx;
                border-right: 1rpx solid rgba(255, 255, 255, 0.1);
                display: flex;
                justify-content: space-between;
                align-items: center;
                &_des {
                    .des_title {
                        font-size: 22rpx;
                        opacity: 0.4;
                        display: block;
                    }
                    .des_name {
                        font-size: 28rpx;
                        font-weight: bold;
                        color: #f2612b;
                    }
                    .color_white {
                        color: #fff;
                    }
                }
            }
            &-right {
                width: 150rpx;
                .rightBtn {
                    width: 90rpx;
                    height: 38rpx;
                    border: 1rpx solid #f2612b;
                    border-radius: 4rpx;
                    font-size: 18rpx;
                    color: #f2612b;
                    &:nth-of-type(2) {
                        color: #f0dc72;
                        border: 1rpx solid #f0dc72;
                        margin-top: 6rpx;
                    }
                    &:nth-of-type(3) {
                        color: #68d77b;
                        border: 1rpx solid #68d77b;
                        margin-top: 6rpx;
                    }
                    &:nth-of-type(4) {
                        color: #748dff;
                        border: 1rpx solid #748dff;
                        margin-top: 6rpx;
                    }
                }
            }
        }
    }
}
</style>


