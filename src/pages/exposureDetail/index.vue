<template>
    <div class="ed-container">
        <div class="ed-header border_bottom">
            <p class="ed-header_title">Phobos (PBS)</p>
            <p class="ed-header_name">#融资死亡币#</p>
            <p class="ed-header_date">起始时间：2018年/死亡时间：2018年</p>
            <div class="ed-header_laber">
                <button class="laber_btn">已曝光</button>
                <button class="laber_btn">已跑路</button>
            </div>
        </div>
        <!-- 判决时间 -->
        <div class="ed-sentence border_bottom">
            <p class="ed-sentence_date">判决时间：2018年</p>
            <p class="ed-sentence_link">判决链接：<navigator class="ed-sentence_url">https://dribbble.com/shots/5306201</navigator></p>
        </div>
        <!-- 详情部分 -->
        <div class="ed-detail border_bottom pr">
            <img class="ed-detail_img" src="../../../static/images/mine_default.png" alt="">
            <p class="ed-detail_des">Phobos创建于2018年，不曾在任何主流交易所上线交易，之所以被列为死亡币是因为其市值排名在1000名之外，已被遗弃并被交易所下线，该项目创始人及CEO均从无查证。</p>
            <!-- 详情内容 -->
            <div class="ed-detail_content pr">
                <img class="ed-detail_bg" src="../../../static/images/exposure_detail-bg.png" alt="">
                <ul class="ed-detail_list">
                    <li v-for="(item,index) in 5" :key="index" class="ed-detail_item pr">自2018年中旬之后便再无社交更新</li>
                </ul>
                <!-- 官网档案 -->
                <div class="ed-detail_files">
                    <p class="files_title">官网档案</p>
                    <p class="files_des">Phobos是可挖矿的带有主节点的加密货币，具有权益证明（POS）和工作证明（POW）的特点，但工作证明概念将于2018年4月取消。Phobos基于Lyra2z算法，能以较低的能耗在网络上提供隐私、安全和快速的交易。Phobos的目标是中长期投资，因为它的硬币供应量较低，而且块奖励逐渐减少。</p>
                    <div class="ed-detail_files_link">
                        <p class="files_title">官网地址</p>
                        <p class="files_url">https://bitcointalk.org/index.php?topic=1666969.180</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 维权渠道 -->
        <div class="ed-detail_channel">
            <p class="title">维权渠道</p>
            <div class="ed-detail_channel_list">
                <p class="channel_item">银监会</p>
                <p class="channel_item">保监会</p>
                <p class="channel_item">证监会</p>
                <p class="channel_item">人民网</p>
                <p class="channel_item">中国互联网金融协会</p>
                <p class="channel_item">中央网信办</p>
                <p class="channel_item">中国人民银行</p>
                <p class="channel_item">工业和信息化部</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },

    methods: {
        
    }
};
</script>

<style lang="scss" scoped>

.ed-container{
    padding: 35rpx 40rpx 110rpx;
}
.ed-header{
    padding-bottom: 40rpx;
    &_title{
        font-size: 44rpx;
        color: #F2612B;
        margin-bottom: 16rpx;
    }
    &_name,&_date{
        font-size: 26rpx;
        color: #CCCCCC;
    }
    &_date{

    }
    &_laber{
        margin-top: 12rpx;
        display: flex;
        .laber_btn{
            width: 100rpx;
            height: 38rpx;
            color: #F2612B;
            font-size: 22rpx;
            border: 1rpx solid #F2612B;
            margin: 0;
            margin-right: 12rpx;
            border-radius: 4rpx;
            &:nth-of-type(2){
                color: #F0DC72;
                border: 1rpx solid #F0DC72;
            }
        }
    }
}
/* 判决时间 */
.ed-sentence{
    padding: 32rpx 0;
    font-size: 26rpx;
    color: #CCCCCC;
    &_link{
        display: flex;
    }
    &_url{
        color: #E5602F;
    }
} 

/* 详情部分 */ 
.ed-detail{
    padding: 40rpx 0 62rpx;
    &_img{
        width: 510rpx;
        height: 350rpx;
        margin: 0 auto 16rpx;
    }
    &_bg{
        width: 456rpx;
        height: 274rpx;
        position: absolute;
        top: -136rpx;
        left: 50%;
        transform: translate(-50%,-10%);
        z-index: -1;
    }
    &_des{
        font-size: 26rpx;
        color: #CCCCCC;
        margin-bottom: 238rpx;
    }
    /* 详情内容 */
    &_content{
        padding: 48rpx 30rpx;
        background: #fff;
        border-radius: 8rpx;
    }
    &_item{
        margin-bottom: 40rpx;
        font-size: 28rpx;
        line-height: 40rpx;
        color: #4C4C4C;
        padding-left: 50rpx;
        &::before{
            content: '';
            display: block;
            width: 16rpx;
            height: 16rpx;
            border: 4rpx solid #F2612B;
            border-radius: 50%;
            position: absolute;
            left: 10rpx;
            top: 50%;
            transform: translateY(-50%);
            
        }
    }
    &_files{
        background: #F3F3F8;
        padding: 40rpx 50rpx;
        margin-top: 56rpx;
        border-radius: 8rpx;
        .files_title{
            font-size: 32rpx;
            font-weight: bold;
            color: #1B1B1B;
            margin-bottom: 16rpx;
        }
        .files_des{
            font-size: 28rpx;
            color: #4C4C4C;
            line-height: 44rpx;
        }
        &_link{
            background: #fff;
            padding: 20rpx 30rpx 42rpx;
            border-radius: 8rpx;
            margin-top: 56rpx;
            .files_url{
                font-size: 26rpx;
                color: #F2612B;
            }
        }
    }

    /* 维权渠道 */ 
    &_channel{
        margin-top: 46rpx;
        .title{
            font-size: 32rpx;
            font-weight: bold;
            color: rgba(255,255,255,.9);
        }
        &_list{
            display: flex;
            flex-wrap: wrap;
            margin-top: 16rpx;
            .channel_item{
                font-size: 26rpx;
                color: #A0A0A0;
                margin-right: 50rpx;
                margin-bottom: 15rpx;
            }
        }
    }
}


</style>



