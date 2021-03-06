import { type } from 'os';
import { baseModel } from '../baseModel';

interface FindDataParamsType {
  username: string;
}
interface SelectArticleParamsType {
  id: number;
}
interface FindArticleDataParamsType {
  id?: number;
  username?: string;
  article_title?: string;
  sign?: string;
  tag?: string;
  praise?: number;
  show_count?: number;
  comment_count?: number;
}
type ArticleInfoParamsType = {
  PageNumber: number;
  PageSize: number;
  Filter: { Name: string; Values: string[] }[];
  Sort: { Name: string; Value: 'ASC' | 'DESC' }[];
};

type ArticleContentType = { ParentId?: number; Id?: number };

class ArticleInfo extends baseModel {
  /**
   *
   * @param param0
   * @returns
   */
  async selectData({ Filter, Sort, PageNumber, PageSize }: ArticleInfoParamsType) {
    const sql = this.knex('article_info');
    if (Filter?.length) {
      sql.where(builder => {
        Filter.forEach(item => {
          if (Array.isArray(item.Values)) {
            if (item.Name === 'tag_parent') {
              if (item.Values && Array.isArray(item.Values)) {
                item.Values.forEach(val => {
                  builder.andWhereLike('tag', `%<${val}>%`);
                });
              }
            } else if (item.Name === 'tag_children') {
              item.Values.forEach(val => {
                builder.andWhereLike('tag', `%-${val}-%`);
              });
            } else {
              builder.whereIn(`article_info.${[item.Name]}`, [...item.Values]);
            }
          }
        });
      });
    }
    if (Sort?.length) {
      sql.orderBy([
        ...Sort.map(item => ({
          column: item.Name,
          order: item.Value.toLocaleLowerCase(),
        })),
      ]);
    }

    if (PageNumber && PageSize) {
      sql.limit(PageSize).offset(PageNumber * PageSize - 1);
    }
    let data = null;
    try {
      data = await sql
        .join('user_public_info', 'article_info.username', '=', 'user_public_info.username')
        .select(
          'article_info.id',
          'user_public_info.id as user_id',
          'user_public_info.username',
          'article_title',
          'sign',
          'tag',
          'article_info.photo_key',
          'show_count',
          'praise',
          'collect',
          'comment_count',
          'create_time',
          'update_time',
          'nickname',
          'sex',
          'heat_value',
          'fans',
          'visit',
          'concern',
          'article_info.read',
          'register_time',
        );
    } catch (error) {
      console.log('error', error);

      return {
        Code: -1,
        Message: '????????????(?????????????????????????????????)',
        Data: null,
      };
    }
    return {
      Code: 0,
      Message: 'success',
      Data: data,
    };
  }

  async findUserData(params: FindDataParamsType) {
    if (params?.username) {
      const data = await this.knex('article_info')
        .select()
        .where({ ...params });
      return {
        data,
      };
    }
    return {
      data: null,
    };
  }

  /**
   * ?????????????????????????????????????????????????????????
   */
  async selectArticleContent(params: ArticleContentType) {
    const condition: { pre_id?: number; Id?: number } = {};
    if (params.ParentId) {
      if (typeof params.ParentId !== 'number') {
        return { Code: -1 };
      }
      condition.pre_id = params.ParentId;
    }
    if (params.Id) {
      if (typeof params.Id !== 'number') {
        return { Code: -1 };
      }
      condition.Id = params.Id;
    }
    let data: any = null;
    try {
      data = await this.knex('article_content')
        .select()
        .where({ ...condition });
    } catch (error) {
      data = -1;
    }
    if (data === -1) {
      return {
        Code: -2,
      };
    }
    return {
      Code: 0,
      Data: data,
    };
  }

  /**
   * ????????????????????????
   */
  async findArticleData(params: FindDataParamsType) {
    const data = await this.knex('article_info').select();
    return {
      data,
    };
  }

  async SelectArticleData(params: SelectArticleParamsType) {
    const data = await this.knex('article_info').select().where(params);
    return {
      data,
    };
  }
}

export = ArticleInfo;
