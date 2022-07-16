import React, { useEffect, useState } from 'react';
import * as moment from 'moment';
import { connect, useHistory, useLocation } from 'umi';

import CardList from '@/components/CradList/CardList';
import { DescribeArticleList } from '@/api/article';

function Recommend(props) {
  const location = useLocation();
  const { query } = location as unknown as { query: string };

  return (
    <div>
      {' '}
      <CardList data={props.data} />
    </div>
  );
}
export default Recommend;
