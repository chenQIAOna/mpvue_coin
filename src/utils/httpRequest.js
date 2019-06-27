import config from '../utils/config.js'

function HttpRequst(loading, url, sessionChoose, params, method, callBack) {
    if (loading == true) {
        wx.showLoading({
            title: '加载中',
            mask: true
        });
    };
    let tokenId = wx.getStorageSync('farmToken');
    let paramSession = [{ 
            'content-type': 'application/json',
            'token': tokenId
        },
        {
            'content-type': 'application/json'
        }
    ];

    let removeStorageData = (key)=>{
        key.forEach((item)=>{
            wx.removeStorageSync(item);
        })
    }

    let removeKey = [
        'userInfo',
        'farmToken',
        'farmQrcode',
        'farmFirstLogin',
        'farmLiveObj'
    ]

    wx.request({
        url: config.webReqestUrl + url,
        data: params,
        dataType: "json",
        header: paramSession[sessionChoose],
        method: method,
        success: function(res) {
            res = res.data;
            if (res.code == 401) {
                let url = '../../mine/login/login';               
                removeStorageData(removeKey);
                wx.navigateTo({
                    url: url,
                })

            }
            if (loading == true) {
                wx.hideLoading(); //隐藏提示框
            };
            setTimeout(() => {
                callBack(res);
            }, 0)
        },
        fail: function(res) {
            removeStorageData(removeKey);
           setTimeout(()=>{
               callBack({ code: 504 })
           })
            if (loading == true) {
                wx.hideLoading(); //隐藏提示框
            };
            setTimeout(() => {
                wx.showToast({
                    icon: 'none',
                    title: res.msg ? res.msg:'网络繁忙,请稍后重试'
                });
            }, 0)
        },
    })
}

const Http = {
    //无token，无loading
    post: function(url, params, callBack) {
        HttpRequst(false, url, 1, params, 'post', callBack);
    },
    get: function(url, params, callBack) {
        HttpRequst(false, url, 1, params, 'get', callBack);
    },
    //无token，有loading
    Lpost: function(url, params, callBack) {
        HttpRequst(true, url, 1, params, 'post', callBack);
    },
    Lget: function(url, params, callBack) {
        HttpRequst(true, url, 1, params, 'get', callBack);
    },
    //无loading，有token
    Tpost: function(url, params, callBack) {
        HttpRequst(false, url, 0, params, 'post', callBack);
    },
    Tget: function(url, params, callBack) {
        HttpRequst(false, url, 0, params, 'get', callBack);
    },
    //有loading，有token
    LTpost: function(url, params, callBack) {
        HttpRequst(true, url, 0, params, 'post', callBack);
    },
    LTget: function(url, params, callBack) {
        HttpRequst(true, url, 0, params, 'get', callBack);
    },
}

export { Http }

