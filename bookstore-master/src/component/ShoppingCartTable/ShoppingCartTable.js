import React, { Component } from 'react';
import emitter from 'util/event';
import { Table, Icon, Divider, Button } from 'antd';
import 'antd/lib/table/style';
import 'antd/lib/button/style';
const header=[{
    title: 'Book',
    dataIndex: 'book',
    key: 'book'
  },{
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },{
  title: 'Language',
  dataIndex: 'language',
  key: 'language',
},{
  title: 'Published',
  dataIndex: 'published',
  key: 'published',
  defaultSortOrder: 'descend',
  sorter: (a,b) => a.published > b.published,
},{
  title: 'Sales',
  dataIndex: 'sales',
  key: 'sales',
}
]


export default class ShoppingCartTable extends Component{
  constructor(props) {
        super(props);
        this.state = {
          header: header,
          message: [],
        };
  }
  componentDidMount() {
        // 组件装载完成以后声明一个自定义事件
        this.eventEmitter = emitter.addListener('changeMessage', (message) => {
          console.log(message);
            this.setState({
                message,
            });
        });
    }

  render(){
    return(
    <div>
    <span style={{'textAlign':'center','fontSize':30,'lineHeight':1.5}}>购物车</span>
     <Table  columns={this.state.header} dataSource={this.state.message} />
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
