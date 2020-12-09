var o = {}
o.log = console.log.bind(console)

/**
* 产生随机数据
*/
o.generateData = function (count) {
    var randomData = [];
    for (var i = 0; i < count; i++) {
        randomData.push(i + 1);
    }
    var max = count;
    for (i = 0; i < max; max--) {
        var random = Math.floor(Math.random() * max);
        var t = randomData[max - 1];
        randomData[max - 1] = randomData[random];
        randomData[random] = t;
    }
    return randomData;
}
export default o;
