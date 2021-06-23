/*
*create by dingyuanwu at 2017.09.13
*/
'use strict';

const { mkdirSync, existsSync } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const heapdump = require('heapdump');

const FILE_PATH = './heapdump/';

const timeout = promisify(setTimeout);
/**
 * 保存快照数据
 */
async function saveHeapdump(filePath) {
  return new Promise((resolve, reject) => {
    heapdump.writeSnapshot(filePath + '/' + Date.now() + '.heapsnapshot', (err, filename) => {
      if (err) {
        reject(err);
      } else {
        resolve(filename);
      }
    });
  });
}

/**
 * 重复保存快照
 * @param {*} times 重复的次数（保存快照的份数）
 * @param {*} duration 每次快照的间隔时间，毫秒
 */
async function saveHeapdumpInterval(times, duration = 60000, filePath = FILE_PATH) {
  filePath = resolve(__dirname, filePath);
  if (!existsSync(filePath)) {
    mkdirSync(filePath, {
      recursive: true
    });
  }

  if (times < 1) {
    times = 1;
  }

  await saveHeapdump(filePath);
  const id = setInterval(saveHeapdump, duration, filePath);

  await timeout((times - 1) * duration);
  clearInterval(id);
}


module.exports = {
  saveHeapdumpInterval,
};