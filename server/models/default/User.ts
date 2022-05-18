import baseModel from '../baseModel';

export class User extends baseModel {
  async selectData() {
    await this.sql('user').insert({ username: 'aaaa', password: 'cccc' });
    const result = await this.sql.select().from('user');
    return {
      result,
    };
  }
}