// 成语 游戏id
const iol_name = "成语填词";
const iol_id = "0e4ee816dcfe5a7671d0fb035510b38c";
//诗词之巅 游戏id
const top_name = "诗词之巅";
const top_id = "62239bc5664c329aa8f35fd2c6690bff";
// 辨字夺宝 游戏id
const dw_name = "辨字夺宝";
const dw_id = "ca18bc86186ab6f76fc341b8adde613f";


const ShuangYangAdCocosSdkFramework = {


    testNativeCall: function () {
        return jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "testNativeCall", "()V");
    },

    // cp 调用

    /**
     * 同步
     * 调用获取当前原生平台API版本
     * @returns {*}
     */
    getVersion: function () {
        return jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onVersion", "()Ljava/lang/String;");
    },

    /**
     * 统一风格,修改名称,不影响上面的可以正常使用
     * 同步
     * 调用获取当前原生平台API版本
     * @returns {any}
     */
    version: function () {
        return jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onVersion", "()Ljava/lang/String;");
    },


    /**
     * 异步
     * 获取用户信息
     * 此方法为异步回调,回调 onUserInfo 方法
     */
    getUserInfo: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onUserInfo", "()V");
    },

    /**
     * 统一风格,修改名称,不影响上面的可以正常使用
     * 同步
     * 获取用户信息
     */
    requestUserInfo: function () {
        return jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onRequestUserInfo", "()Ljava/lang/String;");

    },

    /**
     * 统一风格,修改名称
     * 同步
     * 获取用户进度
     */
    requestSchedule: function () {
        return jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onRequestSchedule", "()I");
    },


    /**
     * 打开个人中
     * 点击头像的时候调用
     */
    openPersonalCenter: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onPersonalCenter", "()V");
    },

    /**
     * 提现
     * 点击提现的时候调用
     * @param type 提现类型 0 金币， 1，红包
     */
    transfer: function (type) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onTransfer", "(Ljava/lang/String;)V", type);
    },

    /**
     * 活动
     * 点击活动的时候调用
     */
    activity: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onActivity", "()V");
    },
    //
    /**
     * 任务
     * 点击任务的时候调用
     */
    task: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onTask", "()V");
    },
    /**
     * 邀请
     * 点击邀请的时候调用
     */
    invite: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onInvite", "()V");
    },
    /**
     * 签到
     * 点击签到的时候调用
     */
    signIn: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onSignIn", "()V");
    },
    /**
     * 在线奖励
     */
    onlineRewards: function () {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onOnlineRewards", "()V");
    },

    /**请求弹出红包
     * @param gameid 游戏id
     * @param level  等级
     * @param source 弹出红包的来源 ,0游戏内，1过关
     */
    requestRedEnvelope: function (gameid, level, source) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onRequestRedEnvelope", "(Ljava/lang/String;I;I)V", gameid, level, source);
    },


    /**
     * 红包弹出后 用户操作 回调数值
     * @param gameid 游戏id
     * @param level 等级或者进度
     * @param source 弹出红包来源 0 游戏内,1过关
     * @param type 0 金币类型，1红包类型
     * @param quantity 数值
     */
    playRedEnvelope: function (gameid, level, source, type, quantity) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onPlayRedEnvelope", "(Ljava/lang/String;I;I;I;I)V", gameid, level, source, type, quantity);
    },
    /**
     * 体力弹窗 领取体力
     * @param gameid
     * @param level
     * @param type
     * @param quantity 体力数量
     */
    addEnergy: function (gameid, level, quantity) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onAddEnergy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", gameid, level, quantity);
    },

    /**
     * 开始游戏调用
     * @param gameid 游戏id
     * @param level 等级或进度
     */
    gameStart: function (gameid, level) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onGameStart", "(Ljava/lang/String;I)V", gameid, level);
    },
    /**
     * 从新开始游戏调用
     * @param gameid
     * @param level
     */
    gameReStart: function (gameid, level) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onGameReStart", "(Ljava/lang/String;I)V", gameid, level);
    },
    /**
     * 游戏结束调用
     * @param gameid 游戏id
     * @param level 等级或进度
     */
    gameOver: function (gameid, level) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onGameOver", "(Ljava/lang/String;I)V", gameid, level);
    },
    /**
     * 退出游戏调用
     * @param gameid 游戏id
     * @param level 等级或进度
     */
    gameExit: function (gameid, level) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onGameExit", "(Ljava/lang/String;I)V", gameid, level);
    },
    /**
     * 将游戏用户信息发送到原生
     * @param gameid 游戏id
     * @param level 等级或进度
     * @param energy 体力
     */

    userGameInfo: function (gameid, level, energy) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onUserGameInfo", "(Ljava/lang/String;I;I)V", gameid, energy, level);
    },

    /**
     * 死亡，看广告继续
     * @param gameid
     * 广告完成后回调 onAdProceed
     */
    adProceed: function (gameid) {
        jsb.reflection.callStaticMethod("com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework", "onAdProceed", "(Ljava/lang/String;)V", gameid);
    },


    // 原生回调
    //
    /**
     * 用户信息回调
     * @param userInfo
     * 参数为字符串json
     nickname 昵称 string
     avatar 头像url地址 string
     gold 金币数量 number
     {
            'nickname': '用户xxx',
            'avatar': 'https://shuangyangad.com/image/com_shuangyangad_default_avatar.png',
            'gold': 10
     }
     */
    onUserInfo: function (userInfo) {
        console.log(" onUserInfo " + userInfo)
    },


    /**
     * 原生回调的弹出红包信息
     * @param gameid 游戏id
     * @param level 等级
     * @param source 弹出红包的来源 ,0游戏内，1过关
     * @param type   金币类型0，红包类型1
     * @param quantity 普通领取的数值
     * @param ad_quantity 看广告领取的数值
     *
     * 此处为游戏弹出红包逻辑,需要游戏实现,红包金额数值 value= : ', value
     * 弹出红包。显示普通领取和高级领取，操作完成后调用 playRedEnvelope 方法将数据回传
     */

    onPlayRedEnvelope: function (gameid, level, source, type, quantity, ad_quantity) {
        // cp 实现
        console.log("js onPlayRedEnvelope")
        //如果用户操作的是普通领取，playRedEnvelope 方法的 quantity 传递 普通领取的值
        //如果用户操作的是看广告领取，playRedEnvelope 方法的 quantity 传递 看广告领取的值


    },

    /**
     * 添加体力回调
     * @param gameid 游戏id
     * @param energy 体力数量
     *
     */
    onAddEnergy: function (gameid, energy) {
        // cp 实现
        console.log("js onAddEnergy")
    },

    /**
     * 获取游戏用户信息回调
     * @param gameid
     * 此方法，需要cp将游戏用户信息拿到后调用 userGameInfo 方法将数据传递到原生
     */
    onUserGameInfo: function (gameid) {
        // cp 实现
        console.log("js onUserGameInfo")
    },

    /**
     * 更新用户金币回调
     * 将金币数量更新到金币数量显示的位置
     * @param quantity 金币数量
     */
    onUpdateUserGold: function (quantity) {
        // cp 实现
        console.log("js onUpdateUserGold")
    },

    /**
     * 更新用户红包金额
     * 将红包金额更新到金额显示的位置
     * @param amount 红包金额（单位为分）
     */
    onUpdateRedEnvelope: function (amount) {
        // cp 实现
        console.log("js onUpdateRedEnvelope")
    },

    /**
     * 广告完成,继续游戏
     * @param gameid
     */
    onProceed(gameid) {
        // cp 实现
        console.log("js onProceed")
    },

    /**
     *
     * 设置进度，设置用户进行到的光卡
     * @param leven
     */
    onSchedule(gameid, level) {
        // cp 实现
        console.log("js onSchedule")
    }

}
module.exports = ShuangYangAdCocosSdkFramework;
