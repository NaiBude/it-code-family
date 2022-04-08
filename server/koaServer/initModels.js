const knex = require('knex');
const { dataLog } = require('./databaseLog');
const { baseModul } = require('../config/config');
const { config } = require('../utils/chooseConfig');
/**
 *
 * @param {Object} context
 *  初始化数据模型
 */
const initModels = function () {
  const sql = knex({
    client: baseModul,
    connection: { ...config },
    debug: true,
    log: { ...dataLog },
  });

  return sql;
};
module.exports = { initModels };
