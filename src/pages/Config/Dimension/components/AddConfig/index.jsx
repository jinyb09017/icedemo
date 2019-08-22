import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Input, Button, Dialog, Switch, Select,Message } from '@alifd/next';
const Option = Select.Option;
import {addDim} from '@/dataSourceConfig'
import request from '@/utils/request';

class AddConfig extends Component {
    handleSubmit = null;

    componentDidMount() {
        console.log("bizid",this.props.bizId);
    }

    state = {
        visible: false
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onClose = reason => {
        this.setState({
            visible: false
        });
    };

    onOk = (e) => {
        this.handleSubmit(e);
    };

    async addDimension(param) {
        let res = await request(addDim(param));
        console.log('datasource',res);
        if (res[0] > 0) {
            Message.show({
                type: 'success',
                title: '添加成功',
                // content: err.message,
              });
              this.setState({
                visible: false,
            });
            this.props.reload();
        }
    };

    onSubmit = (values) => {
        let bizId = this.props.bizId;
        let data = {...values, bizId};
        console.log('data',JSON.stringify(data,0,2));
        this.addDimension(data);
    }

    render() {
        return (
            <div>
                <Button onClick={this.onOpen} type="primary" >
                    {this.props.title}
                </Button>
                <Dialog
                    title={this.props.title}
                    visible={this.state.visible}
                    onOk={this.onOk.bind(this)}
                    onCancel={this.onClose.bind(this, 'cancelClick')}
                    onClose={this.onClose}
                    style={{
                        width: 600,
                    }}
                >
                    <Form
                        onSubmit={this.onSubmit}
                        layout={{
                            labelCol: 4,
                            wrapperCol: 8
                        }}
                    >
                        {formCore => {
                            this.handleSubmit = formCore.submit.bind(formCore);
                            return (
                                <div>
                                    <Field name="name" label="维度名称：" component={Input} placeholder="请输入维度名称" />
                                    <Field name="desc" label="维度说明：" component={Input} placeholder="请输入维度说明" />
                                </div>
                            )
                        }}
                    </Form>
                </Dialog>
            </div>
        );
    }
}

export default AddConfig;