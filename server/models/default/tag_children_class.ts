import { baseModel } from '../baseModel';

interface FindTagChildParamsType {
  id?: number;
  belong?: number;
  content?: string;
}

class SelectChildTag extends baseModel {
  async selectTagChildData(params: FindTagChildParamsType) {
    if (params?.belong) {
      const data = await this.knex('tag_children_class')
        .select()
        .where({ ...params });
      return {
        Data: data,
      };
    }

    return {
      Date: null,
    };
  }
}
export = SelectChildTag;
