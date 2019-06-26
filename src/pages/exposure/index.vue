<template>
   <div class="e-container">
       <p class="e-tips">*为必填项，其余为选填项</p>
       <div class="e-content">
           <ul class="e-content_form">
               <li class="e-content_item">
                   <p class="e-content_item-title"><span>*</span>项目名称</p>
                   <input class="e-content_item-input border" type="text" placeholder="请填写">
               </li>
               <li class="e-content_item">
                   <p class="e-content_item-title">项目所在地</p>
                   <input class="e-content_item-input border" type="text" placeholder="请填写">
               </li>
               <li class="e-content_item">
                   <p class="e-content_item-title">涉及金额</p>
                   <input class="e-content_item-input border" type="text" placeholder="请填写">
               </li>
               <li class="e-content_item">
                   <p class="e-content_item-title">网站链接</p>
                   <input class="e-content_item-input border" type="text" placeholder="请填写">
               </li>
               
               <!-- 举报原因 -->
               <li class="e-content_item">
                   <p class="e-content_item-title"><span>*</span>举报原因（可多选）</p>
                   <ul class="item_season">
                        <li class="item_season_li">
                            <i class="item_season_icon pr item_season_select"></i>
                            <!-- <i class="item_season_icon pr item_season_select"></i> -->
                            <span class="item_season_text">遗弃代币</span>
                        </li>  
                        <li class="item_season_li">
                            <i class="item_season_icon pr"></i>
                            <span class="item_season_text">钱包存在问题</span>
                        </li>  
                        <li class="item_season_li">
                            <i class="item_season_icon pr"></i>
                            <span class="item_season_text">网站/社交媒体停止运营</span>
                        </li>  
                   </ul>
                   <input class="e-content_item-input" type="text" placeholder="请填写">
               </li>
               <!-- 上传图片 -->
               <li class="e-content_item">
                   <p class="e-content_item-title"><span>*</span>上传图片（最多可上传3张图片）</p>
                   <div class="e-content_item-selectImg">
                       <div class="selectIcon pr"></div>
                       <img class="selectImg" src="../../../static/images/mine_default.png" alt="">
                   </div>
               </li>
               <!-- 曝光原因描述 -->
               <li class="e-content_item">
                   <p class="e-content_item-title"><span>*</span>曝光原因描述</p>
                   <input class="e-content_item-input" type="text" placeholder="请填写">
               </li>
           </ul>
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

.e-tips{
    font-size: 22rpx;
    background: #5757FF;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
}
.e-content{
    padding: 40rpx 30rpx 62rpx;
    &_form{

    }
    &_item{
        margin-bottom: 56rpx;
        color: #A0A0A0;
        &-title{
            font-size: 26rpx;
            margin-bottom: 16rpx;
            span{
                color: #A0A0A0;
            }
        }
        &-input{
            height: 88rpx;
            font-size: 32rpx;
            padding-left: 20rpx;
            border-radius: 8rpx;
            color: #fff;
        }
        .item_season{
            margin-top: 24rpx;
            display: flex;
            flex-wrap: wrap;
            padding-left: 20rpx;
            &_li{
                display: flex;
                align-items: center;
                margin-bottom: 32rpx;
                &:nth-of-type(2n+1){
                    width: 56%;
                }
            }
            &_icon{
                width: 30rpx;
                height: 30rpx;
                border-radius: 4rpx;
                margin-right: 10rpx;
                border: 2rpx solid #A0A0A0;
                box-sizing: border-box;
            }
            /* 选中状态 */ 
            &_select{
                border: 2rpx solid #F2612B;
                &::before{
                    content: '';
                    display: block;
                    width: 16rpx;
                    height: 16rpx;
                    background: #F2612B;
                    border-radius: 2rpx;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            &_text{
                font-size: 32rpx;
                white-space: nowrap;
            }
        }
        &-selectImg{
            height: 160rpx;
            display: flex;
            .selectImg,.selectIcon{
                width: 160rpx;
                height: 160rpx;
                border-radius: 4rpx;
                border:2px solid rgba(255,255,255,0.1);
                margin-right: 12rpx;
                box-sizing: border-box;
            }
            .selectIcon{
                &::before,&::after{
                    content: '';
                    display: block;
                    width: 64rpx;
                    height: 4rpx;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    background: #393848;
                }
                &::after{
                    height: 64rpx;
                    width: 4rpx;
                }
                
            }
        }
    }
}



</style>



