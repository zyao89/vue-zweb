# vue-zweb
这是一个Vue插件，与 [ZWebView](https://github.com/zyao89/ZWebView) 组件配合使用。

This is vue-zweb which works only with Vue 2.0+.

## For Example:

1. Development Setup。
```sh
npm install vue-zweb --save
```

2. 注入ZWeb 插件， 在实体对象创建前插入。
```javascript
import VueZWeb from 'vue-zweb';
Vue.use(VueZWeb);
```

* 或者，在引入Vue后，直接引用
```html
<script type="text/javascript" src="vue-zweb/dist/vue-zweb.min.js"></script>
```

3. Vue模版中当作生命周期使用。
```javascript
<template>
  ...
</template>

<script>
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

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Zyao89
