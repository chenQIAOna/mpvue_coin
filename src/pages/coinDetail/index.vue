<template>
    <div class="cd-container">
        <div class="cd-main pr">
            <!-- css写出来的图片效果 -->
            <div class="cd-main_imgbox">
                <!-- 1:融资 2:恶搞   3：骗局   4：遗弃-->
                <div
                    class="cd-main_imgbox_iconBg"
                    :class="{'bg2':categoryId==2,'bg3':categoryId==3,'bg4':categoryId==4}"
                >
                    <i
                        class="iconfont cd-main_imgbox_icon"
                        :class="{'icon-rongzi': categoryId==1,'icon-egao':categoryId==2,'icon-pianju': categoryId==3,'icon-yiqi':categoryId==4}"
                    ></i>
                </div>
            </div>
            <!-- 排序 -->
            <div class="cd-main_sort">
                <div class="cd-main_sort_btnbox">
                    <button class="histoty_btn">最新</button>
                    <button class="histoty_btn active">倒序</button>
                </div>
            </div>

            <div class="d-exposure_list">
                <!-- 每一项开始 -->
                <div
                    v-for="(item, index_) in newCoinList"
                    :key="index_"
                    @click="toExposureDetail"
                    class="d-exposure_item"
                >
                    <p class="d-exposure_item-date pr">{{item.exposureTime}}</p>
                    <ul class="d-exposure_item_ul">
                        <!-- 每一项中每一列 -->
                        <li v-for="el in item.data" :key="el.id" class="d-exposure_item_li">
                            <div class="d-exposure_item_li-left">
                                <div class="d-exposure_item_li-left_des">
                                    <span class="des_title">名称</span>
                                    <span class="des_name">{{el.name}}</span>
                                </div>
                                <div class="d-exposure_item_li-left_des">
                                    <span class="des_title">代码</span>
                                    <span class="des_name color_white">{{el.code}}</span>
                                </div>
                                <div class="d-exposure_item_li-left_des">
                                    <span class="des_title">分类</span>
                                    <span class="des_name color_white">{{el.category}}</span>
                                </div>
                            </div>
                            <div class="d-exposure_item_li-right">
                                <button v-for="(tagItem,i) in el.tags" :key="i" class="rightBtn">{{tagItem}}</button>
                                <!-- <button class="rightBtn">已跑路</button>
                                <button class="rightBtn">已破获</button>
                                <button class="rightBtn">已判决</button> -->
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 每一项结束 -->
            </div>
        </div>
        <!-- loadingMore -->
        <load-more id="loadMore" ref="loadMore"/>
    </div>
</template>
<script>
import { getQuery } from "../../utils/utils";
import { Http } from "../../utils/httpRequest";
import LoadMore from '../../components/loadMore';
export default {
    components: { LoadMore },
    data() {
        return {
            name: "",
            categoryId: 1,
            coinList: [],  // 列表
            newCoinList:[],
            page: 1,  // 页码
            pageSize: 20,  // 每页数量
            hasMore: false  // 是否加载下一页
        };
    },

    mounted() {
        this.name = getQuery().name;
        this.categoryId = getQuery().id;
        wx.setNavigationBarTitle({
            title: this.name + "死亡币"
        });
        this.initCoinList();
    },

    methods: {
        // 初始化币种列表
        initCoinList() {
            let data = {
                categoryId: Number(this.categoryId),
                pageSize: this.pageSize,
                page: this.page
            };
            Http.Lget("/coin", data, res => {
                if (res.status === 200) {
                    // 判断是否加载下一页
                    this.hasMore = res.data.total <= this.pageSize
                    this.coinList = res.data.datas;
                    // 转换数据格式
                    this.newCoinList = this.changeCoinList();
                } else {
                    wx.showToast({
                        title: "未知错误，请联系管理员",
                        icon: "none"
                    });
                }
            });
        },

        // 转换数据结构
        changeCoinList() {
            var map = {},
                newCoinList = [];
            for (var i = 0; i < this.coinList.length; i++) {
                var coin_item = this.coinList[i];
                if (!map[coin_item.exposureTime]) {
                    newCoinList.push({
                        exposureTime: coin_item.exposureTime,
                        data: [coin_item]
                    });
                    map[coin_item.exposureTime] = coin_item;
                } else {
                    for (var j = 0; j < newCoinList.length; j++) {
                        var dj = newCoinList[j];
                        if (dj.exposureTime == coin_item.exposureTime) {
                            dj.data.push(coin_item);
                            break;
                        }
                    }
                }
            }
            return newCoinList;
        },

        //加载更多消息列表
        loadRecordList() {
            if (this.hasMore) {
                return;
            }
            this.page++;
            let data = {
                categoryId: Number(this.categoryId),
                page: this.page,
                pageSize: this.pageSize
            };
            Http.Lget("/coin", data, res => {
                if (res.status === 200) {
                    let data = res.data.datas;
                    let dataLength = data.length; // 数据的长度
                    this.hasMore = dataLength < this.pageSize;
                    let initCoinListLength = this.coinList.length; // 初始化时消息列表长度
                    console.log(initCoinListLength);
                    for (let idx in data) {
                        this.coinList[Number(initCoinListLength) +Number(idx)] = data[idx];
                    }
                    // 转换数据格式
                    this.newCoinList = this.changeCoinList();
                    // console.log(this.$refs.loadMore);
                    // 是否继续加载页数
                    this.$refs.loadMore.loadMoreComplete(dataLength);
                } else {
                    wx.showToast({
                        icon: "none",
                        title: res.msg,
                        duration: 1500
                    });
                }
            });
        }
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.loadRecordList();
    },
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
        &_btnbox {
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
        padding-bottom: 56rpx;
        &:nth-last-of-type(1){
            padding-bottom: 0;
        }
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
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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


