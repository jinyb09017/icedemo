import React from 'react';
import IceContainer from '@icedesign/container';
import UserTableBlock from '@/components/UserTableBlock'
import { Grid, Select, Button, Table, Pagination,Dialog, Input } from '@alifd/next'
import AddConfig from './components/AddConfig'
const pageSize = 10;
// export function Bisiness(){
//    return(
//        <IceContainer>
//            <div>
//                goodTest
//            </div>
//        </IceContainer>
//    )

// }

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabList: [],
            currentTablist: [],
            currentNumber: 1,
            visible:false,
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

    btnAdd = () =>{
        this.setState({
            visible:true,
        })
    }
    onClose = () =>{
        this.setState({
            // visible:false,
        })
    }

    onAddSubmit = values => {
        window.alert(JSON.stringify(values, 0, 2))
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
        this.setState({
            tabList,
            currentNumber: 1,
            // currentTablist:tabList.slice((this.state.currentNumber-1)*pageSize,this.state.currentNumber*pageSize),
            currentTablist: tabList.slice(0, 10),
        })
    }

    render() {
        let { currentTablist, currentNumber,visible , loading} = this.state;
        const okProps = {
            loading
        };
        return (
            <div>
                <IceContainer>
                <AddConfig title="添加业务"/>
                    <Table dataSource={currentTablist} style={{ marginTop: '10px' }}>
                        <Table.Column title="Id" dataIndex="id" />
                        <Table.Column title="错误码" dataIndex="errorcode" />
                        <Table.Column title="错误信息" dataIndex="msg" />
                        <Table.Column title="业务" dataIndex="business" />

                    </Table>
                    <Pagination defaultCurrent={currentNumber} onChange={this.change} style={{ marginTop: '10px' }}/>
                </IceContainer>

            </div>
        )
    };
}
export default Test;