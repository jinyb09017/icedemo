import React from 'react';
import { Button, Search, Select, Grid,DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
const {Row,Col} = Grid; 
import moment from 'moment';
// const { RangePicker, MonthPicker, YearPicker } = DatePicker;
// const onChange = val => console.log(val);

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearch(value) {
        console.log(value);
    }

    render() {
        let aprops = {
            component: 'a',
            target: '_blank',
            href: 'http://www.alibaba.com',
        };

        let bprops = {
            'component': 'a',
            target: '_blank',
            href: 'http://www.alibaba.com',
        };

        let searchData = [
            'haha',
            'good',
            'test',
            'news',
        ]
        let dataSource = [
            {
                label: 'lucy',
                key: 'lucy',
            },
            {
                label: 'lily',
                key: 'lily',
            },
            {
                label: 'judy',
                key: 'judy',
            },
        ]
        return (
            <IceContainer>
                <h1>Button</h1>
                <Button type='primary' size='small' {...aprops}>this is a good test {this.props.name}</Button>&nbsp;&nbsp;
                <Button type='primary' size='small' {...bprops}>this is a good test {this.props.name}</Button>
                <br></br>
                <Button type='secondary' size='medium'>this is a good test {this.props.name}</Button>
                <Button type='normal' size='large' text>this is a good test {this.props.name}</Button>
                <br></br>
                <Button.Group size="large">
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </Button.Group>
                <br></br>
                <Button.Group>
                    <Button type="primary">OK</Button>
                    <Button type="secondary">Cancel</Button>
                </Button.Group>
                <h1>Search</h1>
                <Search filter={searchData} defaultValue="版本" dataSource={searchData} hasClear hasIcon searchText='搜索' onSearch={this.onSearch}></Search>
                <h1>Select</h1>
                <Select>
                    <Select.Option value="option1">option1</Select.Option>
                    <Select.Option value="option2">option2</Select.Option>
                    <Select.Option disabled>disabled</Select.Option>
                </Select>
                <Select.AutoComplete hasClear dataSource={dataSource} />
                <h1>Grid</h1>
                <div className="demo-title">One</div>
                <Row >
                    <Col fixedSpan='5' className = {styles.mycol}>col-8</Col>
                    <Col span="12" className = {styles.mycol}>col-16</Col>
                    <Col span="3" className = {styles.mycol}>col-16</Col>
                    <Col span="3" className = {styles.mycol}>col-16</Col>
                </Row>

                <Row >
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                    <Col span="1p7" className = {styles.mycol}>col-7</Col>
                </Row>
            </IceContainer>
        );
    }
}

export default Demo