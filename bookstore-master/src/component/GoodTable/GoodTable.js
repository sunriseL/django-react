import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Table, Icon, Divider, Button } from 'antd';
import emitter from 'util/event';
import store from '../../store';
import {URL} from '../../config/Api';
import {apiClient} from'util/ApiClient';
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
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    //disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


export default class GoodTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedRowKeys: [],
      loading: false,
      header: header,
    }
  }
  componentWillMount(){
      console.log("子组件得到data:" + this.props.data)
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
      console.log("change 子组件得到data:" + this.props.data)
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  addToCart = () => {
    var result = [];
    var data = this.props.data;
    var username = store
    //console.log(data);
    this.state.selectedRowKeys.forEach(function(value,index,array){
      //console.log(value)
      //console.log(data[value-1])
      var good = data[value - 1];
      apiClient().post(URL + '/api/add/to/cart',{
          username:store.getState().username,
          good_id: good.good_id
      }).then(function(response){

      });
      //result.push(data[value - 1])
    })
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
      <span style={{'textAlign':'center','fontSize':30,'lineHeight':1.5}}>商品列表</span>
        <div style={{ marginBottom: 16,paddingTop:16,textAlign:'left' }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowKey="good_id" rowSelection={rowSelection} columns={this.state.header} dataSource={this.props.data} />
        <Button
          style={{"margin":20}}
          type="primary"
          onClick={this.addToCart}
        >
          添加至购物车
        </Button>
      </div>
    );
  }
}
