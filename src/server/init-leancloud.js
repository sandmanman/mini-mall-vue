// LeanCloud - 初始化
// https://leancloud.cn/docs/sdk_setup-js.html#初始化
//

import AV from 'leancloud-storage';

const APP_ID = 'bM6iL0dmQwJbKoYvrhlv828P-gzGzoHsz',
      APP_KEY = 'UglrlFi8gYgT1t5jeISpsWxz';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default {
    AV
}