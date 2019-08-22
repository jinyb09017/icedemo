import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Input, Button, Dialog, Switch, Select,Message } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const Option = Select.Option;
import {addBus} from '@/dataSourceConfig'
import request from '@/utils/request';

class AddConfig extends Component {
    handleSubmit = null;

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

    async addBusiness(param) {
        let res = await request(addBus(param));
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
        this.addBusiness(values);
    }

    render() {
        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
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
                                    <Field name="bizName" label="业务名称：" component={Input} placeholder="请输入业务名称" />
                                    <Field name="appId" label="appId：" component={Input} placeholder="请输入appId" />
                                    <Field name="os" label="os：" component={Select} placeholder="请输入appId" >
                                        <Option value="android" key="android">android</Option>
                                        <Option value="ios" key="ios">ios</Option>
                                    </Field>
                                    <Field name="metaId" label="魔兔配置id：" component={Input} placeholder="请填写魔兔配置id" />
                                    <Field name="reportId" label="魔兔报表id：" component={Input} placeholder="请填写魔兔报表id" />
                                    <Field name="point" label="业务埋点名称：" component={Input} placeholder="请输入业务埋点名称" />
                                    <Field name="midware" label="是否中间件：" component={Switch} placeholder="是否中间件" value={false} />
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