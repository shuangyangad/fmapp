package com.shuangyangad.cocos.sdk.framework;
//com/shuangyangad/cocos/sdk/framework/ShuangnYangAdSdkFramework

import android.annotation.SuppressLint;
import android.util.Log;

import org.cocos2dx.javascript.AppActivity;
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;
import org.json.JSONObject;

@SuppressLint("ALL")
public class ShuangnYangAdSdkFramework {

    private static final String TAG = "ShuangnYangAdSdkFramework";

    // 成语
    private String iol = "0e4ee816dcfe5a7671d0fb035510b38c";
    //诗词之巅
    private String top = "62239bc5664c329aa8f35fd2c6690bff";
    // 辨字夺宝
    private String dw = "ca18bc86186ab6f76fc341b8adde613f";

    /**
     * 获取api版本
     *
     * @return
     */

    public static String onVersion() {
        LogUtils.log(TAG, "getVersion");
        return "latest";
    }

    /**
     * 游戏调用获取用户信息
     */
    public static void onUserInfo() {
        // 从sdk中获取用户信息，发送给游戏
        LogUtils.log(TAG, "onUserInfo: ");
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("nickname", "用户xxx");
            jsonObject.put("avatar", "https://shuangyangad.com/image/com_shuangyangad_default_avatar.png");
            jsonObject.put("gold", 10);
            jsonObject.put("money", 10);

            Log.e(TAG, "onUserInfo: " + jsonObject.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 获取用户信息后调用
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onUserInfo(\"%s\")", jsonObject.toString().replace("\"", "'"));

        LogUtils.log(TAG, "onUserInfo: js : " + js);

        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }

    private static int i = 1;

    public static int onRequestSchedule() {
        return i++;
    }


    public static String onRequestUserInfo() {
        // 从sdk中获取用户信息，发送给游戏
        LogUtils.log(TAG, "onUserInfo: ");
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("nickname", "用户xxx");
            jsonObject.put("avatar", "https://shuangyangad.com/image/com_shuangyangad_default_avatar.png");
            jsonObject.put("gold", 10);
            jsonObject.put("money", 10);

        } catch (Exception e) {
            e.printStackTrace();
        }
        Log.e(TAG, "onRequestUserInfo: " + jsonObject.toString());
        return jsonObject.toString();
    }


    /**
     * 游戏用户信息回调
     */
    public static void onUserGameInfo(String gameid,
                                      int level,
                                      int energy

    ) {
        LogUtils.log(TAG, "onUserGameInfo: 游戏id" + gameid);
        LogUtils.log(TAG, "onUserGameInfo: 游戏体力值" + energy);
        LogUtils.log(TAG, "onUserGameInfo: 等级或者进度" + level);

    }


    /**
     * 开始游戏
     *
     * @param gameId
     * @param level
     */
    public static void onGameStart(
            String gameId,
            int level
    ) {

        LogUtils.log(TAG, "onGameStart: gameId " + gameId + " level " + level);

    }

    /**
     * 从新开始游戏
     *
     * @param gameId
     * @param level
     */
    public static void onGameReStart(String gameId,
                                     int level) {
        LogUtils.log(TAG, "onGameReStart: gameId " + gameId + " level " + level);
    }

    /**
     * 游戏结束
     *
     * @param gameId
     * @param level
     */
    public static void onGameOver(String gameId,

                                  int level
    ) {
        LogUtils.log(TAG, "onGameOver: gameId " + gameId + " level " + level);
    }


    /**
     * 退出游戏
     *
     * @param gameId
     * @param level
     */
    public static void onGameExit(String gameId,
                                  int level
    ) {
        LogUtils.log(TAG, "onGameOver: gameId " + gameId + " level " + level);
    }


    /**
     * 打开个人中心
     */
    public static void onPersonalCenter() {
        LogUtils.log(TAG, "onPersonalCenter");
    }

    /**
     * 提现
     */
    public static void onTransfer(int type) {
        LogUtils.log(TAG, "onTransfer" + type);
    }

    /**
     * 活动
     */
    public static void onActivity() {
        LogUtils.log(TAG, "onActivity");
    }

    /**
     * 任务
     */
    public static void onTask() {
        LogUtils.log(TAG, "onTask");
    }

    /**
     * 邀请
     */
    public static void onInvite() {
        LogUtils.log(TAG, "onInvite");
    }

    /**
     * 签到
     */
    public static void onSignIn() {
        LogUtils.log(TAG, "onSignIn");
    }


    /**
     * 获取游戏用户信息
     */
    public static void getUserGameInfo(String gameid) {
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onUserGameInfo(\"%s\")", gameid);
        LogUtils.log(TAG, "getUserGameInfo : js : " + js);
        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }


    /**
     * 添加体力
     *
     * @param gameId
     */
    public static void addEnergy(String gameId,
                                 int energy
    ) {
        LogUtils.log(TAG, "playRedEnvelope: ");
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onAddEnergy(\"%s,%s\")", gameId, energy);

        LogUtils.log(TAG, "playRedEnvelope js : " + js);
        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }


    /**
     * 请求弹出红包
     *
     * @param gameid 游戏id
     * @param level  等级
     * @param source 弹出红包的来源 ,0游戏内，1过关
     */
    public static void onRequestRedEnvelope(
            String gameid,
            int level,
            int source

    ) {
        // 判断是否弹出 后 调用弹出
        playRedEnvelope(
                "aaa",
                source,
                10,
                1,
                100,
                120);
    }


    /**
     * 红包弹出信息操作回调
     *
     * @param gameid   游戏id
     * @param level    等级
     * @param source   弹出红包的来源 ,0游戏内，1过关
     * @param type     类型 0金币,1红包金额
     * @param quantity 领取的数值
     */
    public static void onPlayRedEnvelope(
            String gameid,
            int level,
            int source,
            int type,
            int quantity
    ) {
        // 积分系统操作

    }


    /**
     * 弹出红包
     */
    /**
     * @param gameid      游戏id
     * @param level       等级
     * @param source      弹出红包的来源 ,0游戏内，1过关
     * @param type        金币类型0，红包类型1
     * @param quantity    普通领取数量
     * @param ad_quantity 看广告领取数量
     */
    public static void playRedEnvelope(
            String gameid,
            int level,
            int source,
            int type,
            int quantity,
            int ad_quantity) {
        LogUtils.log(TAG, "playRedEnvelope: ");
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onPlayRedEnvelope(\"%s,%s,%s,%s,%s,%s\")", gameid, level, source, type, quantity, ad_quantity);
        LogUtils.log(TAG, "playRedEnvelope js : " + js);
        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }


    /**
     * 更新用户金币数量
     *
     * @param quantity
     */
    public static void updateUserGold(int quantity) {
        LogUtils.log(TAG, " java updateUserGold: ");
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onUpdateUserGold(\"%s\")", quantity);
        LogUtils.log(TAG, "updateUserGold js : " + js);
        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }

    /**
     * 更新用户红包数量
     *
     * @param amount
     */
    public static void updateRedEnvelope(int amount) {
        LogUtils.log(TAG, " java updateRedEnvelope: ");
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onUpdateRedEnvelope(\"%s\")", amount);
        LogUtils.log(TAG, "updateUserGold js : " + js);
        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }

    /**
     * 死亡，看广告继续
     *
     * @param gameId
     */
    public static void proceed(String gameId) {
        LogUtils.log(TAG, " java proceed: ");
        final String js = String.format("cc.shuangnyangadcocossdkframeworkchannel.onProceed(\"%s\")", gameId);
        LogUtils.log(TAG, "updateUserGold js : " + js);
        AppActivity.getInstance().runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(js);
            }
        });
    }


    public static void testNativeCall() {
        LogUtils.log(TAG, "testNativeCall: ");
        playRedEnvelope("aaa", 1, 10, 1, 100, 120);
        addEnergy("aaa", 1);
        getUserGameInfo("aaa");
        updateUserGold(100);
        updateRedEnvelope(1000);
        proceed("aaa");
    }
}