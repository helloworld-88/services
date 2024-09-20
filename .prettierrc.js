/** @type {import("prettier").Options} */
module.exports = {
  semi: true,//指定是否使用分号。true表示会在语句结尾处加入分号，false则相反。若省略该选项，则默认为true。
  tabWidth: 2,//指定使用几个空格代替一个Tab键
  printWidth: 400,//指定一行最多允许的字符数
  trailingComma: 'es5',//是否在行末添加逗号。'es5'表示在ES5中允许添加行末逗号，同时也是Prettier默认选项。'none'表示不允许加逗号，'all'表示在后面都加逗号
  singleQuote: true //指定是否使用单引号。true表示使用单引号，false则使用双引号
};
