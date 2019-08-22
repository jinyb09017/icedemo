import React from 'react';
import IceContainer from '@icedesign/container';
import UserTableBlock from '@/components/UserTableBlock'
import { Grid, Select, Button, Table, Pagination, Dialog, Input, Icon } from '@alifd/next'
import AddConfig from './components/AddConfig'
const pageSize = 10;
import { getAllBusiness, delBus } from '@/dataSourceConfig'
import request from '@/utils/request';
import { Link } from 'react-router-dom';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabList: [],
            currentTablist: [],
            currentNumber: 1,
            visible: false,
            footerActions: ['ok', 'cancel'],
            loading: false,
        };
    }

    change = (value) => {
        console.log(value);
        //入参为上一个状态的state.(state更新是异步的。同一次更新的state不能相互依赖)
        this.setState((state, props) => ({
            currentNumber: value,
            currentTablist: state.tabList.slice((value - 1) * pageSize, value * pageSize),
        }))
    }

    reload = () => {
        this.fetchList();
    }

    btnAdd = () => {
        this.setState({
            visible: true,
        })
    }
    onClose = () => {
        this.setState({
            // visible:false,
        })
    }

    onAddSubmit = values => {
        window.alert(JSON.stringify(values, 0, 2))
    }
    async fetchList() {
        //发起网络请求
        const res = await request(getAllBusiness);
        // console.log('dataSource', JSON.stringify(res,0,2));
        this.setState({
            tabList: res,
            currentNumber: 1,
            // currentTablist:tabList.slice((this.state.currentNumber-1)*pageSize,this.state.currentNumber*pageSize),
            currentTablist: res.slice(0, 10),
        })
    }

    async doDelBusiness(id) {
        //发起网络请求
        const res = await request(delBus({ id }));
        console.log('dataSource', JSON.stringify(res, 0, 2));
        if (res[0] > 0) {
            this.fetchList();
        }
    }


    componentDidMount() {
        let tabList = [];
        for (let i = 1; i < 100; i++) {
            let item = {
                id: i,
                errorcode: '10078',
                business: '首页',
                msg: '这是一个能用错误',
            }
            tabList.push(item);
        }
        this.fetchList();
    }
    popupConfirm = (id) => {
        Dialog.confirm({
            title: '提醒',
            content: '确定要删除此条业务配置吗？删除后则不能查看报表',
            onOk: () => {this.doDelBusiness(id);},
            onCancel: () => console.log('cancel')
        });
    };

    render() {
        let { currentTablist, currentNumber, visible, loading } = this.state;
        const okProps = {
            loading
        };
        //指定某列的渲染方式
        const cellRender = (value, index, record) => {
            return <div>
                <Button text onClick={this.popupConfirm.bind(this, record.id)}>
                    <Icon type='ashbin' size='small'></Icon>
                </Button>
            </div>
        };
        const cellDetail = (value, index, record) => {
            const path = {
                pathname: '/config/dimension',
                search: '?id=' + record.id + '&json=' + JSON.stringify(record),

            }
            return <div>
                <Link to={path} >
                    <Icon type='ellipsis' size='small'></Icon>
                </Link>
            </div>
        }
        const midWareRender = (value, index, record) => {
            return <span>{record.midware ? '是' : '否'}</span>
        };
        const cellId = (value, index, record) => {
            return <span>{index + 1}</span>;
        };

        return (
            <div>
                <IceContainer>

                    <AddConfig title="添加业务" reload={this.reload} />
                    <Table dataSource={currentTablist} style={{ marginTop: '10px' }}>
                        <Table.Column title="序号" cell={cellId} />
                        <Table.Column title="业务名称" dataIndex="bizName" />
                        <Table.Column title="appId" dataIndex="appId" />
                        <Table.Column title="配置id" dataIndex="metaId" />
                        <Table.Column title="报表id" dataIndex="reportId" />
                        <Table.Column title="埋点名称" dataIndex="point" />
                        <Table.Column title="系统" dataIndex="os" />
                        <Table.Column title="是否中间件" cell={midWareRender} />
                        <Table.Column title="删除" cell={cellRender} />
                        <Table.Column title="详情" cell={cellDetail} />
                    </Table>
                    <Pagination defaultCurrent={currentNumber} onChange={this.change} style={{ marginTop: '10px' }} />
                </IceContainer>
                <Dialog
                    visible={this.state.visible}
                    onOk={this.onClose.bind(this, 'ok')}
                    onCancel={this.onClose.bind(this, 'no')}
                    onClose={this.onClose} />
            </div>
        )
    };
}
export default Test;