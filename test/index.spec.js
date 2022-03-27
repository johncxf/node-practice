/**
 * @file: 单测文件
 * @author: john
 * @date: 2022-03-27
 */
/* globals describe, it */
const { expect } = require('chai');

describe('单测', function () {
    it('test', async () => {
        let ret = 'test';
        // 断言校验
        expect(ret).to.equal('test');
    });
});