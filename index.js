import clientInfo from 'lm-se-client-info'
export default function(options) {
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
        return options.browser
    }
}
