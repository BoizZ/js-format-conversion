# JavaScript格式化输出

## 概述
JavaScript几个格式化字符输出函数，陆续更新更多实用函数

## Js版本

### 调用
引入dist文件夹的js-format-conversion.js
```
<script type="text/javascript" src="../dist/js-format-conversion.js"></script>
```

### 使用
```
//时间戳转时间差显示格式
kb.dateDiff(timestamp);

//new Date()转格式化日期：
kb.formatDate(new Date());

//数字、浮点数字四舍五入为2位小数（价钱）
kb.formatPrice(Float);

//匿名姓名输出：
kb.anonymousName('String');

//匿名电话输出：
kb.anonymousPhone('String');
```

## Node版本

### 调用
引入dist文件夹中的kbfc.js
```
var kbfc = require('./kbfc');
```

### 使用
```
//时间戳转时间差显示格式
kbfc.dateDiff(timestamp);

//new Date()转格式化日期：
kbfc.formatDate(new Date());

//数字、浮点数字四舍五入为2位小数（价钱）
kbfc.formatPrice(Float);

//匿名姓名输出：
kbfc.anonymousName('String');

//匿名电话输出：
kbfc.anonymousPhone('String');
```
