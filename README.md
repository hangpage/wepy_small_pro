# wepy_small_pro

### 使用wepy框架对现有小程序进行重构
- [官方资源](https://github.com/Tencent/wepy)
- [官方文档](https://tencent.github.io/wepy/#/)

#### 下载本项目预览
- git clone git@github.com:hangpage/wepy_small_pro.git
- npm install
- wepy build --watch

#### 遇到的几点问题

- 通过this.$parent获取小程序app实例
- 异步函数中更新数据的时候，必须手动调用$apply方法，才会触发脏数据检查流程的运行

```
setTimeout(() => {
        this.title = 'this is title';
        this.$apply();
    }, 3000);
```
