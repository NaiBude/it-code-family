// 供 shell 脚本调用，以过滤被 eslint 忽略的文件
// 接受一系列文件/路径，对其进行过滤，去除符合 eslint ignore 规则的文件，并输出到终端中

const { execSync } = require('child_process');
const { ESLint } = require('eslint');

// 用于过滤eslint ignore文件
const removeIgnoredFiles = async files => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(files.map(file => eslint.isPathIgnored(file)));
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles;
};

(async () => {
  const files = process.argv.slice(2, process.argv.length); // 读取参数（待过滤文件）
  const filesToLint = await removeIgnoredFiles(files); // 过滤
  execSync(`echo ${filesToLint.join(' ')}`, { stdio: 'inherit' }); // 输出到终端
})();
