import React, { useState } from 'react';
import { Col, Row, Table, Card, Space, Button, Pagination } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

const Index = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // 搜索区域的函数
  const searchLayout = () => {

  }

  // 表格工具栏区域函数
  const beforeTableLayout = () => {
    return (
      <Row>
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
      <Row>
        <Col xs={24} sm={12}>...翻页</Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination />
        </Col>
      </Row>
    )
  }

  return (
    <PageContainer>
      <Card>
        {searchLayout()}
        {beforeTableLayout()}
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        {afterTableLayout()}
      </Card>
    </PageContainer>
  )
}

export default Index