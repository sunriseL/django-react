import React, {Component} from 'react';
import GoodTable from 'component/GoodTable/GoodTable'
import Paper from 'material-ui/Paper';

import ShoppingCartTable from 'component/ShoppingCartTable/ShoppingCartTable';
const style = {
  margin: 20,
  textAlign: 'center',
};

export default class Page1 extends Component {
    render() {
        return (

          <div>

          <Paper style={style} zDepth={1}>
          <div style={{margin:5}}>
          <GoodTable/>
          </div>
          </Paper>
          <Paper style={style} zDepth={1}>
          <div style={{margin:5}}>
          <ShoppingCartTable/>
          </div>
          </Paper>
          </div>
        )
    }
}
