import { type } from 'os';
import { baseModel } from '../baseModel';

interface PropsType {
  title: string;
  sign: string;
  username: string;
  tag_parent: string;
  tag_children: string[];
  word: number;
  content: string[];
  photoKey: string;
}
class DraftInfo extends baseModel {
  async insertDraftInfo(params: PropsType) {
    const {
      title,
      sign,
      username,
      tag_parent,
      tag_children,
      content = [],
      photoKey,
      word,
    } = params;
    let tag = `<${tag_parent}>`;
    tag_children.forEach(item => {
      tag += `-${item}`;
    });
    if (tag_children.length > 0) {
      tag += '-';
    }

    const result = await this.knex('draft_info').max('id', { as: 'id' });
    let maxId = 0;
    if (result[0].id) {
      maxId = result[0].id;
    }
    await this.knex('draft_info').insert({
      id: maxId + 1,
      article_title: title,
      sign,
      username,
      tag,
      photo_Key: photoKey,
      word,
    });

    const taskList = [];
    content.forEach(item => {
      taskList.push(
        this.knex('draft_content').insert({
          pre_id: maxId + 1,
          content: item,
        }),
      );
    });
    await Promise.all(taskList);
    return null;
  }

  async selectDraftInfo(params: { id?: number; username?: string } = {}) {
    const result = await this.knex('draft_info')
      .where({ ...params })
      .select();

    return { Data: result };
  }
}
export = DraftInfo;
