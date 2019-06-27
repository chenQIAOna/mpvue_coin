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
                   <ul class="e-content_item-season">
                        <li class="season_li">
                            <i class="select_icon pr isSelect"></i>
                            <span class="season_text">遗弃代币</span>
                        </li>  
                        <li class="season_li">
                            <i class="select_icon pr isSelect"></i>
                            <span class="season_text">钱包存在问题</span>
                        </li>  
                        <li class="season_li">
                            <i class="select_icon pr isSelect"></i>
                            <span class="season_text">网站/社交媒体停止运营</span>
                        </li>  
                   </ul>
                   <input class="e-content_item-input" type="text" placeholder="请填写">
               </li>
               <!-- 上传图片 -->
               <li class="e-content_item">
                   <p class="e-content_item-title"><span>*</span>上传图片（最多可上传3张图片）</p>
                   <div class="e-content_item-selectImg">
                       <div class="pr">
                            <img class="selectImg" src="../../../static/images/mine_default.png" alt="">
                            <span class="delete">删除</span>
                       </div>
                       <div class="selectIcon pr"></div>
                   </div>
               </li>
               <!-- 曝光原因描述 -->
               <li class="e-content_item">
                   <p class="e-content_item-title"><span>*</span>曝光原因描述</p>
                   <textarea class="e-content_item-textarea border" name="" id="" cols="30" rows="10" placeholder="请填写"></textarea>
               </li>

               <!-- 称呼 -->
               <li class="e-content_item">
                   <p class="e-content_item-title">您的称呼</p>
                    <div class="e-content_item-name">
                        <input class="name_input border" type="text" placeholder="请填写">
                        <div class="name_isIgnore">
                            <i class="select_icon pr"></i>
                            <span>匿名</span>
                        </div>
                    </div>  
               </li>
               <!-- 联系方式 -->
               <li class="e-content_item">
                   <p class="e-content_item-title">联系方式（QQ号/手机号/邮箱，三选一）</p>
                   <div class="e-content_item-phone border">
                       <div class="phone">
                           <span>手机号</span>
                           <i class="iconfont icon-xiaosanjiao"></i>
                       </div>
                        <input class="e-content_item-input" type="text">
                   </div>
               </li>
           </ul>

           <!-- 协议 -->
           <div class="e-content_isAgreen">
               <i class="select_icon pr"></i>
               <p>我已阅读并同意<span class="e-content_isAgreen-text">点击阅读死亡币记曝光协议</span></p>
           </div>
           <!-- 提交按钮 -->
           <div class="e-content_btnBox">
               <button class="e-content_edit">修改</button>
               <button class="e-content_cancel">取消</button>
               <button class="e-content_submit">提交</button>
           </div>

       </div>
       <!-- 协议弹框 -->
       <div class="e-mask">
           <div class="e-mask_contentBox">
               <!-- 标题 -->
               <div class="e-mask_content">
                    <p class="e-mask_content-title">曝光协议</p>
                    <div class="e-mask_content-list">
                        本服务协议双方为死亡币记与死亡币记小程序用户，本服务协议具有合同效力。 XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXX9999
                    </div>
               </div>
                <!-- 按钮 -->
                <div class="e-mask_btnBox">
                    <button class="cancel">取消</button>
                    <button class="confire">确定</button>
                </div>
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

/* 复选框样式 */ 
.select_icon{
    width: 30rpx;
    height: 30rpx;
    border-radius: 4rpx;
    margin-right: 10rpx;
    border: 2rpx solid #A0A0A0;
    box-sizing: border-box;
}
.isSelect{
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

.e-tips{
    font-size: 22rpx;
    background: #5757FF;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
}
.e-content{
    padding: 40rpx 30rpx 62rpx;
    font-size: 32rpx;
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
        &-textarea{
            width: 690rpx;
            height: 300rpx;
            border-radius:8rpx;
            padding: 20rpx;
            box-sizing: border-box;
        }
        // 名称
        &-name{
            display: flex;
            align-items: center;
            .name_input{
                width: 394rpx;
                height: 88rpx;
                border-radius: 8rpx;
                margin-right: 40rpx;
                padding-left: 20rpx;
            }
            .name_isIgnore{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        // 手机号
        &-phone{
            display: flex;
            .phone{
               width: 162rpx;
               border-right: 1rpx solid rgba(255, 255, 255, .1);
               display: flex;
               align-items: center;
               justify-content: center;
            }
            .icon-xiaosanjiao{
                font-size: 16rpx;
                margin-left: 10rpx;
            }
        }
        // 原因
        &-season{
            margin-top: 24rpx;
            display: flex;
            flex-wrap: wrap;
            padding-left: 20rpx;
            .season_li{
                display: flex;
                align-items: center;
                margin-bottom: 32rpx;
                &:nth-of-type(2n+1){
                    width: 56%;
                }
            }
            .season_text{
                font-size: 32rpx;
                white-space: nowrap;
            }
        }
        // 选择图片
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
            .delete{
                width: 72rpx;
                height: 32rpx;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F2612B;
                font-size: 22rpx;
                position: absolute;
                bottom: 4rpx;
                right: 16rpx;
                border-radius:4rpx 0rpx 0rpx 0rpx;
            }
        }
    }

    /* 协议 */ 
    &_isAgreen{
        font-size: 26rpx;
        display: flex;
        color: #A0A0A0;
        margin-top: -20rpx;
        &-text{
            color: #F2612B;
            text-decoration: underline;
        }
    }
    /* 提交按钮 */
    &_btnBox{
        margin-top: 80rpx;
        display: flex;
        font-size: 36rpx;
        font-weight: bold;
        overflow: hidden;
    }
    button{
        height: 90rpx;
        color: #fff;
        border-radius: 8rpx;
        flex: 1;
    }
    &_submit{
        background: #A0A0A0;

        color: #CCCCCC;
        .isActive{
            background: #F2612B;
            color: #fff;
        }
    } 
    &_edit{
        margin-right: 30rpx;
        background: #5757ff;
    }
    &_cancel{
        background: #41c2de;
        margin-right: 30rpx;
    }
}

/* 协议弹框 */
.e-mask{
    background: rgba(0, 0, 0, .8);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    &_contentBox{
        width: 570rpx;
        background: #fff;
        border-radius: 8rpx;
        color: #4C4C4C;
        box-sizing: border-box;
        overflow: hidden;
        margin: auto;
    }
    &_content{
        padding: 96rpx 40rpx 0;
        &-title{
            font-size: 36rpx;
            font-weight: bold;
            color: #1B1B1B;
            margin-bottom: 24rpx;
            text-align: center;
        }
        &-list{
            white-space: wrap;
            word-wrap: break-word;
            word-break: normal;
            font-size: 26rpx;
            overflow-x: auto;
            height: 548rpx;
        }
    }
    &_btnBox{
        display: flex;
        height: 90rpx;
        border-top: 1rpx solid rgba(0, 0, 0, .1);
        border-radius:0px 0px 8rpx 0rpx;
        button{
            flex: 1;
            border: none;
            border-radius:0;
            outline: none;
        }
        .cancel{
            background: #fff;
        }
        .confire{
            background: #F2612B;
        }
    }
}



</style>



