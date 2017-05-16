var clientInfo = require('lm-se-client-info')
module.exports=function(options) {
    if ('native' in options) {
        if (clientInfo.render.isNativeWebView) {
            return options.native
        }
    } else { 
        if (clientInfo.render.isIosWebView) {
            return options.ios
        } else if (clientInfo.render.isAndroidWebView) {
            return options.android
        }
    }
    if (clientInfo.render.isWechatWebView) {
        return options.wechat
    } else if (clientInfo.render.isBrowser) {
        console.log('no matched env')
        return options.browser || function(){
            return Promise.resolve({})
        }
    }
}
