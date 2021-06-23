# xcmemoryleakutil

heapdump包的封装，提供更加便捷的方式获取Node应用运行时的内存快照数据。
快照的默认存放路径为：./heapdump/ 。
使用方式：
```javascript
const { saveHeapdumpInterval } = require('../src/memory');

// 保存两份快照数据，间隔时间为10秒
saveHeapdumpInterval(2, 10000, '/etc/file');
// 异步的方式
(async () => {
  await saveHeapdumpInterval(2, 10000, '/etc/file');
})();
```

## 版本说明
- 2.0.0 修改对外暴露的方法名，增加duration参数；saveHeapdumpInterval方法改为异步
- 1.0.0 完成第一个版本