import React from 'react'
import { Grid, Select, Button, Table, Input } from '@alifd/next'
import IceContainer from '@icedesign/container';
import styles from './index.module.scss'
import { Pagination } from '@alifd/next';
import TableContextMenu from '@/components/TableContextMenuBlock'
const { Row, Col } = Grid;
let tabSource = [
    {
        id: 1,
        errorcode: '10079',
        business: 'dinamcx',
        msg: '这是一个能用错误',
    },
    {
        id: 2,
        errorcode: '11078',
        business: 'dinamcx',
        msg: '这是一个能用错误吧',
    },
    {
        id: 3,
        errorcode: '10078',
        business: '首页',
        msg: '这是一个能用错误',
    },
    {
        id: 4,
        errorcode: '10078',
        business: 'dinamcx',
        msg: '这是一个能用错误',
    },
    {
        id: 5,
        errorcode: '10078',
        business: 'dinamcx',
        msg: '这是一个能用错误',
    }
]

const bininessSource = [
    { label: 'option1', value: 'option1' },
    { label: 'option2', value: 'option2' },
    { label: 'disabled', disabled: true }
];
const pageSize = 10;

class ErrerConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList:[],
            currentTablist:[],
            currentNumber:0,
        };
    }
    change = (value) => {
        console.log(value);
        this.setState({
            currentNumber:value,
            currentTablist:this.state.tabList.slice((value-1)*pageSize,value*pageSize)
        })
    }

    componentDidMount() {
        let tabList = [];
        for(let i=1; i<100;i++) {
            let item = {
                id: i,
                errorcode: '10078',
                business: '首页',
                msg: '这是一个能用错误',
            }
            tabList.push(item);
        }
        this.setState({
            tabList,
            currentNumber:1,
            // currentTablist:tabList.slice((this.state.currentNumber-1)*pageSize,this.state.currentNumber*pageSize),
            currentTablist:tabList.slice(1,10),
        })
    }
    render() {
        let {currentTablist,currentNumber} = this.state;
        return (
            <IceContainer>
                <div>
                    <Row>

                        <Col span='8'>
                            <span>错误码</span>
                            <Input hasClear className={styles.input_css}></Input>
                        </Col>
                        <Col span='8'>
                            <span>错误信息</span>
                            <Input hasClear className={styles.input_css}></Input>
                        </Col>
                        <Col span='8'>
                            <Button type='primary' style={{ float: 'right' }}>搜索</Button>
                        </Col>
                    </Row>

                    <Table  dataSource={currentTablist} style={{ marginTop: '30px' }}>
                        <Table.Column title="Id" dataIndex="id" />
                        <Table.Column title="错误码" dataIndex="errorcode" />
                        <Table.Column title="错误信息" dataIndex="msg" />
                        <Table.Column title="业务" dataIndex="business" />

                    </Table>
                    <Pagination defaultCurrent={currentNumber} onChange={this.change} />,
                    <TableContextMenu/>
                </div>
            </IceContainer>
        );
    }
}

export default ErrerConfig;