import { request } from "@/.umi/plugin-request/request";
import ProTable from "@ant-design/pro-table"
import { Space } from "antd";

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

export async function queryLog(
  params: any,
  successFun: (result: any) => void,
  errorFun: (msg: string) => void
) {
  request('http://pan.it266.com:8001/passport/user/createToken', {
    method: 'POST',
    data: params,
  })
}

const CustomerTable: React.FC<{}> = () => {

  // const customerData = (
  //   params: customerDataType
  // ) => {

  // }

  return (
    <div>
      <ProTable
        columns={tableStyle}

      />
    </div>
  )
}

export default CustomerTable;