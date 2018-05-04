import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Table, Icon, Divider, Button } from 'antd';
import emitter from 'util/event';
import 'antd/lib/table/style';
import 'antd/lib/button/style';



const tableData = [
  {
    key:'1',
    book: 'Dream',
    author: 'Cao Xueqin',
    language: 'Chinese',
    published: '1754-1791',
    sales: '100 million',
  },
  {
    key:'2',
    book: 'Dream',
    author: 'Cao Xueqin',
    language: 'Chinese',
    published: '1764-1791',
    sales: '100 million',
  },
  {
    key:'3',
    book: 'Dream',
    author: 'Cao Xueqin',
    language: 'Chinese',
    published: '1734-1791',
    sales: '100 million',
  },
  {
    key:'4',
    book: 'Dream',
    author: 'Cao Xueqin',
    language: 'Chinese',
    published: '1744-1791',
    sales: '100 million',
  },
  {
    key:'5',
    book: 'Dream',
    author: 'Cao Xueqin',
    language: 'Chinese',
    published: '1784-1791',
    sales: '100 million',
  },

];

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
      tableData: tableData,
      header: header,
    }
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
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  addToCart = () => {
    var result = [];
    var data = this.state.tableData;
    //console.log(data);
    this.state.selectedRowKeys.forEach(function(value,index,array){
      //console.log(value)
      //console.log(data[value-1])
      result.push(data[value - 1])
    })
      emitter.emit('changeMessage',result)
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
        <Table rowSelection={rowSelection} columns={this.state.header} dataSource={this.state.tableData} />
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
