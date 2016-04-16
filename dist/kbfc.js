exports.dateDiff = function(publishTime) {
    var timestamp = publishTime / 1000;
    var d_minutes, d_hours, d_days;
    var timeNow = parseInt(new Date().getTime() / 1000);
    var d;
    d = timeNow - timestamp;
    d_days = parseInt(d / 86400);
    d_hours = parseInt(d / 3600);
    d_minutes = parseInt(d / 60);
    if (d_days > 0 && d_days < 4) {
        return d_days + "天前";
    } else if (d_days <= 0 && d_hours > 0) {
        return d_hours + "小时前";
    } else if (d_hours <= 0 && d_minutes > 0) {
        return d_minutes + "分钟前";
    } else {
        var s = new Date(timestamp * 1000);
        return (s.getMonth() + 1) + "月" + s.getDate() + "日";
    }
};
exports.formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '年' + m + '月' + d + '日';
};
exports.formatPrice = function(num) {
    return parseFloat(num).toFixed(2)
};
exports.anonymousName = function(name) {
    var anm = name.substring(0, 1);
    var star = '*',i;
    for(i=1;i<name.length-1;i++){
        if(i==5){
            break;
        }
        star += '*';
    }
    anm = anm+star;
    return anm;
}