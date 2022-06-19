import React from 'react';
import CardList from '@/components/CradList/CardList';
import '../index.less';

export default function Nowplaying(props) {
  // console.log(props);
  const mokedata = [
    {
      id: 1,
      theme: 'HTML',
      url: 'https://img-blog.csdnimg.cn/img_convert/0d0b64210a56f0d0cdde02eca14a74a9.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png',
      context:
        '文章目录一、什么是聚类二、聚类算法2.1聚类数据集2.2亲和力传播2.3聚合聚类2.4K均值2.5Mini-Batch K均值2.6光谱聚类为大家提供免费的GPU，比谷歌calob平台使用更简单，注册就送100个小时。如果想领取的小伙伴点击下面链接。',
      thumb: '989',
      chat: '45',
      browse: '666',
    },
    {
      id: 2,
      theme: 'JAVA',
      url: 'https://img-blog.csdnimg.cn/img_convert/0d0b64210a56f0d0cdde02eca14a74a9.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png',
      context:
        '文章目录一、什么是聚类二、聚类算法2.1聚类数据集2.2亲和力传播2.3聚合聚类2.4K均值2.5Mini-Batch K均值2.6光谱聚类为大家提供免费的GPU，比谷歌calob平台使用更简单，注册就送100个小时。如果想领取的小伙伴点击下面链接。',
      thumb: '989',
      chat: '45',
      browse: '666',
    },
    {
      id: 3,
      theme: 'JAVA',
      url: 'https://img-blog.csdnimg.cn/img_convert/0d0b64210a56f0d0cdde02eca14a74a9.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png',
      context:
        '文章目录一、什么是聚类二、聚类算法2.1聚类数据集2.2亲和力传播2.3聚合聚类2.4K均值2.5Mini-Batch K均值2.6光谱聚类为大家提供免费的GPU，比谷歌calob平台使用更简单，注册就送100个小时。如果想领取的小伙伴点击下面链接。',
      thumb: '989',
      chat: '45',
      browse: '666',
    },
    {
      id: 4,
      theme: 'JAVA',
      url: 'https://img-blog.csdnimg.cn/img_convert/0d0b64210a56f0d0cdde02eca14a74a9.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png',
      context:
        '文章目录一、什么是聚类二、聚类算法2.1聚类数据集2.2亲和力传播2.3聚合聚类2.4K均值2.5Mini-Batch K均值2.6光谱聚类为大家提供免费的GPU，比谷歌calob平台使用更简单，注册就送100个小时。如果想领取的小伙伴点击下面链接。',
      thumb: '989',
      chat: '45',
      browse: '666',
    },
    {
      id: 5,
      theme: 'JAVA',
      url: 'https://img-blog.csdnimg.cn/img_convert/0d0b64210a56f0d0cdde02eca14a74a9.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png',
      context:
        '文章目录一、什么是聚类二、聚类算法2.1聚类数据集2.2亲和力传播2.3聚合聚类2.4K均值2.5Mini-Batch K均值2.6光谱聚类为大家提供免费的GPU，比谷歌calob平台使用更简单，注册就送100个小时。如果想领取的小伙伴点击下面链接。',
      thumb: '989',
      chat: '45',
      browse: '666',
    },
    {
      id: 6,
      theme: 'JAVA',
      url: 'https://img-blog.csdnimg.cn/img_convert/0d0b64210a56f0d0cdde02eca14a74a9.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png',
      context:
        '文章目录一、什么是聚类二、聚类算法2.1聚类数据集2.2亲和力传播2.3聚合聚类2.4K均值2.5Mini-Batch K均值2.6光谱聚类为大家提供免费的GPU，比谷歌calob平台使用更简单，注册就送100个小时。如果想领取的小伙伴点击下面链接。',
      thumb: '989',
      chat: '45',
      browse: '666',
    },
  ];
  return (
    <div className='cardist'>
      <CardList data={mokedata} />
    </div>
  );
}
