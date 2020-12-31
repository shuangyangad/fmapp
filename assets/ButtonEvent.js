// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const ShuangYangAdCocosSdkFramework = require("ShuangYangAdCocosSdkFramework");
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad() {
        cc.shuangnyangadcocossdkframeworkchannel = ShuangYangAdCocosSdkFramework;
    },
    start() {
    },

    onBtuttonClickVersion() {
        console.log("js api version :  ")
        cc.shuangnyangadcocossdkframeworkchannel.getVersion()
    },
    onBtuttonClickUserInfo() {
        console.log("js 获取用户信息 ")
        cc.shuangnyangadcocossdkframeworkchannel.getUserInfo()
    },
    onBtuttonClickSignIn() {
        console.log("js 签到 ")
        cc.shuangnyangadcocossdkframeworkchannel.signIn()
    },
    onBtuttonClickTask() {
        console.log("js 任务 ")
        cc.shuangnyangadcocossdkframeworkchannel.task()
    },
    onBtuttonClickInvite() {
        console.log("js 邀请 ")
        cc.shuangnyangadcocossdkframeworkchannel.invite()
    },
    onBtuttonClickgameStart() {
        console.log("js 开始游戏 ")
        cc.shuangnyangadcocossdkframeworkchannel.gameStart("aaa", 10)
    },
    onBtuttonClickgameReStart() {
        console.log("js 从新开始 ")
        cc.shuangnyangadcocossdkframeworkchannel.gameReStart("aaa", 10)
    },
    onBtuttonClickgameOver() {
        console.log("js 游戏结束 ")
        cc.shuangnyangadcocossdkframeworkchannel.gameOver("aaa", 10)
    },
    onBtuttonClickgameExit() {
        console.log("js 游戏退出 ")
        cc.shuangnyangadcocossdkframeworkchannel.gameExit("aaa", 10)
    },
    onBtuttonNativeCall() {
        console.log("js 测试原生回调 ")
        cc.shuangnyangadcocossdkframeworkchannel.testNativeCall()
    },
    onBtuttonSchedule() {
        console.log("js 获取进度 : " + cc.shuangnyangadcocossdkframeworkchannel.requestSchedule())

    },
    onBtuttonUserInfo1() {
        console.log("js 获取用户信息 : " + cc.shuangnyangadcocossdkframeworkchannel.requestUserInfo())
    },
    onBtuttonVersion1() {
        console.log("新获取版本 : " + cc.shuangnyangadcocossdkframeworkchannel.version())
    },
});
