/**
 * @file: 入口文件
 * @author: john
 * @date: 2022-10-27
 */
const automator = require('smartapp-automator');

// 获取用户 home 目录
const USER_HOME = process.env.HOME || process.env.USERPROFILE;

// WebDriverAgent 默认地址
const wdaProjPath = USER_HOME + '/WebDriverAgent/WebDriverAgent.xcodeproj';

(async argv => {
    let deviceType = 'iOS';
    let container = 'baidu';

    // 获取连接的设备
    let devices = await automator.devices(deviceType);
    let deviceIds = Object.keys(devices);
    let deviceId = deviceIds[0];

    // 启动设备
    let device = await automator.launch({ deviceType, deviceId, wdaProjPath, container });

    await device.reLaunchApp(container);
})(process.argv).catch(async err => {
    console.error(`Error: ${err.stack}`);// eslint-disable-line
});
process.on('uncaughtException', async err => {
    console.error(`uncaughtException: ${err.stack}`);// eslint-disable-line
});
process.on('unhandledRejection', async err => {
    console.error(`unhandledRejection: ${err.stack}`);// eslint-disable-line
});
