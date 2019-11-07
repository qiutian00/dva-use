//加载mock的数据 通过循环把在 mock 文件夹下的所有配置文件都拿到，并最后export出去
const fs = require("fs");
const path = require("path");
const mockPath = path.join(__dirname + "/mock");

const mock = {};
fs.readdirSync(mockPath).forEach(file => {
  Object.assign(mock, require("./mock/" + file));
});

module.exports = mock;
