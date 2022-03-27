/**
 * @file: 字符串
 * @author: john
 * @Date: 2022-03-25
 */

/**
 * 获取字符串中最长的连续数字
 *
 * @param {string} str 字符串
 * @returns {string}
 */
function getLongestNumFromStr(str) {
    let indexMap = [];
    let flag = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            indexMap[flag] = indexMap[flag] || [];
            indexMap[flag].push(str[i]);
        } else {
            flag++;
        }
    }
    let index = 0;
    let max = 0;
    for (let i = 0; i < indexMap.length; i++) {
        if (indexMap[i] && indexMap[i].length > max) {
            max = indexMap[i].length;
            index = i;
        }
    }
    return indexMap[index].join('');
}

const str = 'a1zxc1232345abc34ac3213';
let result = getLongestNumFromStr(str);
console.log(result);