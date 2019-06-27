<template>
    <div class="d-container">
        <!-- 搜索框 -->
        <navigator class="d-search pr" url="../search/main">
            <input class="d-search_input" type="text" placeholder="挖坟，我们是专业的！" disabled="disabled">
            <i class="iconfont icon-ic-search d-search_icon"></i>
        </navigator>
        <!-- 死亡币种 -->
        <div class="d-nav">
            <p class="d-nav_title">死亡币种</p>
            <ul class="d-nav_list">
                <li
                    v-for="item in categoryList"
                    :key="item.id"
                    class="d-nav_item"
                    @click="toCoinDetail(item.id,item.name)"
                >
                    <!-- css写出来的图片效果 -->
                    <div class="d-nav_item-img pr">
                        <i class="iconfont d-nav_item-icon" :class="{'icon-rongzi': index===0}"></i>
                        <i class="iconfont d-nav_item-icon" :class="{'icon-egao': index===1}"></i>
                        <i class="iconfont d-nav_item-icon" :class="{'icon-pianju': index===2}"></i>
                        <i class="iconfont d-nav_item-icon" :class="{'icon-yiqi': index===3}"></i>
                    </div>
                    <p class="d-nav_item-name">{{item.name}}</p>
                </li>
            </ul>
        </div>
        <!-- 最新曝光 -->
        <div class="d-exposure">
            <p class="d-nav_title d-exposure_title">最新曝光</p>
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
import { Http } from "../../utils/httpRequest";
export default {
    data() {
        return {
            categoryList: []
        };
    },

    mounted() {
        this.initCategory();
    },

    methods: {
        // 前往详情页
        toExposureDetail() {
            wx.navigateTo({ url: "../exposureDetail/main" });
        },
        toCoinDetail(id, name) {
            wx.navigateTo({
                url: "../coinDetail/main?id=" + id + "&name=" + name
            });
        },
        // 初始化分类
        initCategory() {
            Http.Lget("/category", {}, res => {
                if(res.status === 200){
                    this.categoryList = res.data;
                    for(let i=0;i<this.categoryList.length;i++){
                        // 截取 ‘死亡币’三个字
                        this.categoryList[i].name = this.categoryList[i].name.slice(0,2)
                    }
                }else {
                    wx.showToast({
                        title: '未知错误，请联系管理员',
                        icon: 'none'
                    })
                }
            });
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.d-container {
    padding: 20rpx 30rpx;
}
/* 搜索框 */
.d-search {
    margin-bottom: 64rpx;

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

/* 死亡币种 */
.d-nav {
    margin-bottom: 80rpx;
    &_title {
        font-size: 36rpx;
        font-weight: bold;
        color: #fff;
        margin-bottom: 40rpx;
    }
    &_list {
        display: flex;
        justify-content: space-between;
        padding: 0 26rpx;
    }
    &_item {
        text-align: center;
        /* 融资、恶搞、骗局、遗弃背景颜色 */
        &:nth-of-type(2) {
            > div {
                &::after {
                    background: linear-gradient(
                        180deg,
                        rgba(255, 217, 83, 1) 0%,
                        rgba(255, 178, 41, 1) 100%
                    );
                }
            }
        }
        &:nth-of-type(3) {
            > div {
                &::after {
                    background: linear-gradient(
                        135deg,
                        rgba(110, 226, 224, 1) 0%,
                        rgba(36, 160, 144, 1) 100%
                    );
                }
            }
        }
        &:nth-of-type(4) {
            > div {
                &::after {
                    background: linear-gradient(
                        135deg,
                        rgba(173, 173, 173, 1) 0%,
                        rgba(68, 68, 68, 1) 100%
                    );
                }
            }
        }
        &-img {
            width: 114rpx;
            height: 114rpx;
            border-radius: 50%;
            background: linear-gradient(
                180deg,
                rgba(120, 120, 120, 1) 0%,
                rgba(67, 67, 67, 1) 100%
            );
            border: 4rpx solid rgba(54, 55, 73, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12rpx;
            &::before {
                content: "";
                display: block;
                width: 98rpx;
                height: 98rpx;
                border-radius: 50%;
                background: #232234;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            &::after {
                content: "";
                display: block;
                width: 62rpx;
                height: 62rpx;
                border-radius: 50%;
                background: linear-gradient(
                    135deg,
                    rgba(246, 123, 19, 1) 0%,
                    rgba(234, 69, 8, 1) 100%
                );
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        &-icon {
            z-index: 99;
            color: #232234;
            font-size: 42rpx;
            font-weight: bold;
        }
        &-name {
            font-size: 24rpx;
            color: #fff;
            line-height: 32rpx;
            opacity: 0.64;
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



