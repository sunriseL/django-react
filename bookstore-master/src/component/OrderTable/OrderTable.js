import React, { Component } from 'react';
import { Table, Icon, Divider, Button } from 'antd';
import 'antd/lib/table/style';
import 'antd/lib/button/style';
const header=[{
    title: '订单id',
    dataIndex: 'id',
    key: 'id'
  },{
  title: '商品id',
  dataIndex: 'gid',
  key: 'gid',
}
]



export default class OrderTable extends Component{
  constructor(props) {
        super(props);
        this.state = {
          header: header,
          message: [],
        };
  }
  componentDidMount() {
        console.log(this.props.data)
    }

  render(){
    return(
    <div>
    <span style={{'textAlign':'center','fontSize':30,'lineHeight':1.5}}>订单</span>
     <Table  rowKey="good_id" columns={this.state.header} dataSource={this.props.data} />
     <Button
       style={{"margin":20}}
       type="primary"
       onClick={this.addToCart}
     >
       结算
     </Button>
     </div>
    )
  }
}
