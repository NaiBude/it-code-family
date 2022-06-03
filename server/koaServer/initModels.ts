import { knex } from 'knex';
import { dataLog } from './databaseLog';

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
  console.log('sqlinfo', sql);

  return sql;
};
const knexModel = initModels();
export = { knex: knexModel };
