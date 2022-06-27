import { type } from 'os';
import { baseModel } from '../baseModel';

interface FindDataParamsType {
  username: string;
}

type ArticleInfoParamsType = {
  PageNumber: number;
  PageSize: number;
  Filter: { Name: string; Values: string[] }[];
  Sort: { Name: string; Value: 'ASC' | 'DESC' }[];
};

class ArticleInfo extends baseModel {
  async selectData({ Filter, Sort, PageNumber, PageSize }: ArticleInfoParamsType) {
    const sql = this.knex('article_info');
    if (Filter?.length) {
      sql.where(builder => {
        Filter.forEach(item => {
          if (Array.isArray(item.Values)) {
            if (item.Name === 'tag-parent') {
              if (item.Values && Array.isArray(item.Values)) {
                item.Values.forEach(val => {
                  builder.andWhereLike('tag', `%<${val}>%`);
                });
              }
            } else if (item.Name === 'tag-children') {
              item.Values.forEach(val => {
                builder.andWhereLike('tag', `%-${val}-%`);
              });
            } else {
              builder.whereIn(item.Name, [...item.Values]);
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
        .select();
    } catch (error) {
      return {
        Code: -1,
        Message: '请求错误(参数错误｜数据请求错误)',
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
}
export = ArticleInfo;
