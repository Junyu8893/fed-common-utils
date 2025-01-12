/**
 * 通过 terser 压缩 JS 代码（tsc 编译后执行）。
 */

const { minify } = require('terser');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// 压缩参数
const compressOptions = {
  output: {
    'ascii_only': true
  }
};

async function compress(sourceCode) {
  return (await minify(sourceCode, compressOptions)).code;
}

glob.sync('**/*.js', {
  cwd: path.resolve(__dirname, '../dist'),
  absolute: true
}).forEach(async (jsPath) => {
  fs.writeFileSync(
    jsPath,
    await compress(fs.readFileSync(jsPath, 'utf-8')),
    'utf-8'
  );
});
