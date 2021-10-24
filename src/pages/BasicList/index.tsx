import React, { useState } from 'react';
import { Col, Row, Table, Card, Space, Button, Pagination } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { useRequest } from '@/.umi/plugin-request/request';

const Index = () => {
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(3);
  // useRequest是从umi中导入
  const apiUrl = useRequest<{ data: BasicListInterfaceType.Data }>(
    'https://public-api-v2.aspirantzhang.com/api/admins?X-API-KEY=antd'
  );

  // 搜索区域的函数
  const searchLayout = () => {

  }

  // 表格工具栏区域函数
  const beforeTableLayout = () => {
    return (
      <Row style={{ backgroundColor: '#ccc'}}>
        <Col xs={24} sm={12}>...搜索</Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Space>
            <Button type="primary" >Add</Button>
            <Button type="primary" >Add2</Button>
          </Space>
        </Col>
      </Row>
    );
  }

  // 翻页区域函数
  const afterTableLayout = () => {
    return (
      <Row style={{ backgroundColor: '#ccc'}}>
        <Col xs={24} sm={12}>...翻页</Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination
            key={0}
            // 数据总数
            total={apiUrl?.data?.meta?.total}
            // 当前页
            current={apiUrl?.data?.meta?.page}
            // pageSize后端给的是：per_page: 10。这里给默认值，没有数据时是0，不然会报错
            pageSize={apiUrl?.data?.meta?.per_page || 0}
            // showSizeChanger

          />
          
        </Col>
      </Row>
    )
  }

  return (
    <PageContainer>
      <Card>
        {searchLayout()}
        {beforeTableLayout()}
        <Table
          // key={apiUrl?.data}
          dataSource={apiUrl?.data?.dataSource}
          // 用filter去除隐藏的列。return后面的意思是：如果hideInColumn不为true，就把列展示出来
          columns={apiUrl?.data?.layout?.tableColumn.filter((removeHidColumn) => {
            return removeHidColumn.hideInColumn !== true;
          })}
          // 关闭自带的页码
          pagination={false}
          // 给一个正在加载的状态图标
          loading={apiUrl.loading}
        />
        {afterTableLayout()}
      </Card>
    </PageContainer>
  )
}

export default Index