import React from 'react';
import { Button, Search, Select, Grid, DatePicker, Table, Span, Icon, } from '@alifd/next';
import IceContainer from '@icedesign/container';
const { Row, Col } = Grid;
import styles from './index.module.scss'
import AddConfig from './components/AddConfig'
import { getAllDim, delDim } from '@/dataSourceConfig'
import request from '@/utils/request';
import { parseSearch } from '@/utils/parseUrl';
class Dimension extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        }
    }

    async del(id) {
        console.log(id);
        const data = await request(delDim({ id }));
        if (data[0] > 0) {
            this.getAllDims();
        }
    }

    async getAllDims() {
        let bizId = parseSearch(this.props.location.search).params.id;
        const data = await request(getAllDim({ bizId }));
        this.setState({
            dataSource: data,
        })
    }

    reload = () => {
        this.getAllDims();
    }

    componentDidMount() {
        console.log("componentDidMount11", this.props);
        this.getAllDims();
    }
    render() {
        const businessStr = decodeURI(parseSearch(this.props.location.search).params.json)
        const business = JSON.parse(businessStr);
        const { dataSource } = this.state;
        const fixCell = (value, index, record) => {
            return <span>{record.fix ? "是" : "否"}</span>;
        };
        const operateCell = (value, index, record) => {
            return <Button text onClick={this.del.bind(this, record.id)} disabled={record.fix ? true : false}><Icon type='ashbin' size='small'></Icon></Button>;
        };
        const bizId = parseSearch(this.props.location.search).params.id;
        return (
            <div>
                <IceContainer>
                    <span className={styles.span_title}>{business.bizName}</span>
                    <Row>
                        <Col fixedSpan='20'><span className={styles.col_span_left}>appId:</span><span className={styles.col_span_right}>{business.appId}</span></Col>
                        <Col fixedSpan='20'><span className={styles.col_span_left}>埋点名称:</span><span className={styles.col_span_right}>{business.point}</span></Col>
                    </Row>
                    <Row style={{ marginTop: 10, }}>
                        <Col fixedSpan='20'><span className={styles.col_span_left}>配置id:</span><span className={styles.col_span_right}>{business.metaId}</span></Col>
                        <Col fixedSpan='20'><span className={styles.col_span_left}>报表id:</span><span className={styles.col_span_right}>{business.reportId}</span></Col>
                    </Row>
                    <Row style={{ marginTop: 10, }}>
                        <Col fixedSpan='20'><span className={styles.col_span_left}>系统:</span><span className={styles.col_span_right}>{business.os}</span></Col>
                        <Col fixedSpan='20'><span className={styles.col_span_left}>是否中间件:</span><span className={styles.col_span_right}>{business.fix ? '是' : '否'}</span></Col>
                    </Row>
                </IceContainer>

                <IceContainer>

                    <div><span className={styles.span_title}>维度配置</span></div>
                    <AddConfig title='添加维度' bizId={bizId} reload={this.reload}></AddConfig>
                    <Table dataSource={dataSource} style={{ marginTop: '10px' }}>
                        <Table.Column title="维度名称" dataIndex="name"></Table.Column>
                        <Table.Column title="说明" dataIndex="desc"></Table.Column>
                        <Table.Column title="是否必选" cell={fixCell}></Table.Column>
                        <Table.Column title="操作" cell={operateCell}></Table.Column>
                    </Table>
                </IceContainer>
            </div>
        )
    }
}

export default Dimension;