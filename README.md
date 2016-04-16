# JavaScript格式化输出

### 概述
JavaScript几个格式化字符输出函数，陆续更新更多实用函数

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
```
