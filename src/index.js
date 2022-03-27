/**
 * @file: 入口文件
 * @author: john
 * @date: 2022-03-27
 */
const fs = require('fs');
const { program } = require('commander');

const { version } = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`, 'utf8'));

(async argv => {
    program
        .name('node ./src/index.js')
        .version(version, '-V, --version', 'Script Version')
        .option('-F, --filePath <filePath>', '指定文件目录')
        .parse(argv);

    let { filePath } = program;
    console.info(`[Info] - filePath: ${filePath}`);// eslint-disable-line
})(process.argv).catch(async err => {
    console.error(`Error: ${err.stack}`);// eslint-disable-line
});
process.on('uncaughtException', async err => {
    console.error(`uncaughtException: ${err.stack}`);// eslint-disable-line
});
process.on('unhandledRejection', async err => {
    console.error(`unhandledRejection: ${err.stack}`);// eslint-disable-line
});
