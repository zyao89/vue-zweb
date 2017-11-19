# vue-zweb
这是一个Vue插件，与 [ZWebView](https://github.com/zyao89/ZWebView) 组件配合使用。

### For Example:

1. 安装。
```sh
npm install vue-zweb --save
```

2. 注入ZWeb 插件， 在实体对象创建前插入。
```javascript
import VueZWeb from 'vue-zweb';
Vue.use(VueZWeb);
```

3. Vue模版中当作生命周期使用。
```javascript
<template>
  ...
</template>

<script>0
export default {
  name: "ZWebSDK",
  zWebReady() {
    ...
    // 调用 ZWebSDK
    ...
  }
};
</script>
```


