import { useState } from 'react';
import { Input } from 'antd';
import { Row, Col, Card, List } from 'antd';
import ProTable from '@ant-design/pro-table';

const { Search } = Input;
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: '名字',
        dataIndex: 'title',
        search: false,
    },
    {
        title: '状态',
        dataIndex: 'status',
        search: false,
    },
    {
        title: '时间',
        dataIndex: 'time',
        search: false,
    },
    {
        title: '版本',
        dataIndex: 'no',
        search: false,
    },
];
const data = [
    {
        id: '1',
        title: '风扇',
        status: 0,
        time: 2021 - 1 - 1,
        no: 111111,
    },
    {
        id: '2',
        title: '空调',
        status: 0,
        time: 2021 - 1 - 1,
        no: 11123211,
    },
    {
        id: '3',
        title: '冰箱',
        status: 0,
        time: 2021 - 1 - 1,
        no: 222211111,
    },
    {
        id: '4',
        title: '洗衣机',
        status: 0,
        time: 2021 - 1 - 1,
        no: 333333333111,
    },
];

const ClickDisplay = () => {
    const [info, setInfo] = useState([3]);

    const infoChange = (val: number) => {
        // console.log(val);
        setInfo([val]);
    };

    return (
        <div>
            <Row>
                <Col span={5}>
                    <Card
                        bordered={false}
                        bodyStyle={{
                            minHeight: '840px',
                            background: '#ccc',
                        }}
                    >
                        <Search
                            placeholder="请输入您要搜索的内容"
                            style={{ width: 240, marginBottom: 30 }}
                        />
                        <List
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item onClick={() => infoChange(item)}>{item.title}</List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={18} style={{ marginLeft: '60px' }}>
                    <Card style={{ height: '840px' }}>
                        <ProTable
                            columns={columns}
                            dataSource={info}
                            rowKey="id"
                            search={{
                                labelWidth: 'auto',
                            }}
                            pagination={false}
                            dateFormatter="string"
                            headerTitle="详细信息"
                        ></ProTable>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ClickDisplay;
