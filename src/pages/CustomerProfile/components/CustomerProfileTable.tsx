import useRequest from "@ahooksjs/use-request";
import { BarsOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Form, Input, Row, Col, Select, Card, Button, Table, Tag, Space } from "antd";
import request from "umi-request";
import { ValueIterateeCustom, values } from "@umijs/deps/compiled/lodash";
const { Option } = Select;
interface CustomerTableProps {

}

const tableStyle = [

  {
    title: '编号',
    dataIndex: 'number',
    key: 'key-number',// 这个key有啥用？
    // render: text => <a>{text}</a>,
  },
  {
    title: '客户名称',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '状态',
    dataIndex: 'state'
  },
  {
    title: '联系电话',
    dataIndex: 'telephone'
  },
  {
    title: '客户类型',
    dataIndex: 'type'
  },
  {
    title: '客户来源',
    dataIndex: 'source'
  },
  {
    title: '微信号',
    dataIndex: 'wechat'
  },
  // {
  //   title: '标签',
  //   dataIndex: 'PersonTags',
  //   render: PersonTags => (
  //     <>
  //       {/* map方法报错加个判断，即加了ZStags && */}
  //       {PersonTags && PersonTags.map(tagContent => {
  //         let TagColor = tagContent.length > 5 ? 'red' : 'blue';
  //         if (tagContent === 'loser' || tagContent === 'success') {
  //           TagColor = '#008c8c';
  //         }
  //         return (
  //           <Tag color={TagColor} key={tagContent}>
  //             {tagContent.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   )
  // },
  {
    title: '操作',
    render: (text: any, record: any) => (
      <Space size='middle'>
        {/* <a>邀请{record.PersonName}</a> */}
        <a>编辑</a>
      </Space>
    )
  }
]

const customerInfo = [
  {
    key: '1',
    number: '147258',
    name: '张三',
    gender: '男',
    state: ['success', '性格好', '这是大于5的', '前端开发者'],
    telephone: '12382587777',
    type: '潜在客户',
    source: '网络',
    wechat: 'weixin123',
  },
  // {
  //   key: '2',
  //   PersonName: '李四',
  //   PersonAge: '11',
  //   PersonAddress: '住家里',
  //   PersonTags:['学习','loser', '打球'],
  // }
]

// 使用TS实现ajax请求方法
// interface Config {
//   type: string;
//   url: string;
//   data?: string;
//   dataType: string;
// }

// //原生js封装的ajax
// function ajax(config: Config) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(config.type, config.url, true);
//   xhr.send(config.data);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log('-----------++++++++++:', 'chengong');

//       if (config.dataType == 'json') {

//         console.log(JSON.parse(xhr.responseText));
//       } else {
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }

// 定义客户的属性接口类型
export interface customerDataType {
  name?: string;
  number?: Number;
}


// 查询客户请求接口函数
export function queryCustomer(
  params: customerDataType

) {
  return request('http://pan.it266.com:8001/passport/user/createToken', {
    method: 'POST',
    data: params,
  })
}

const CustomerTable: React.FC<CustomerTableProps> = (props) => {

  const [state, setState] = useState()
  // 得到已查询到的客户
  // let msg = queryCustomer().then(res => {
  //   console.log(res);
  //   setstate(res.data)
  // });
  // console.log(msg);

  // 得到已查询到的客户信息
  let getCustomerInfo = queryCustomer({})
    .then(parameter => {
      console.log('解析出来的内容：', parameter);

    })


  return (
    <div>
      <Card>
        <Form
          name="customerInfoSearch"
        >
          <Row>
            <Col span={6}>
              <Form.Item
                label="客户姓名"
                name="customerName"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                label="联系电话"
                name="customerTelephone"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="customerSource" label="客户来源">
                <Select
                  placeholder="全部"
                  // onChange={this.onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="state" label="状态">
                <Select
                  placeholder="启用"
                  // onChange={this.onGenderChange}
                  allowClear
                >
                  <Option value="disable">禁用</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Col span={6}>
              <Form.Item
                label="客户邮箱"
                name="customerMail"

              >
                <Input />
              </Form.Item>
            </Col >

            <Col span={6}>
              <Button icon={<SearchOutlined />}>搜索</Button>
              <Button icon={<DeleteOutlined />}>清空</Button>
              <Button icon={<BarsOutlined />}>保存方案</Button>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card>
        <Table columns={tableStyle} dataSource={customerInfo} />
      </Card>


    </div>
  )
}

export default CustomerTable;