import { baseModel } from '../baseModel';
import ErrMessage from '@/error';

interface FindTagParamsType {
  id?: number;
  content?: string;
}

class SelectTag extends baseModel {
  async selectTagData(params: FindTagParamsType = {}) {
    const data = await this.knex('tag_parent_class').select();
    return { Data: data };
  }
}
export = SelectTag;
