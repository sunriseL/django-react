import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from 'router/router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'
import store from './store';
import {Provider} from 'react-redux';
// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
  return config
});
renderWithHotReload(getRouter());
if (module.hot) {
  module.hot.accept('./router/router', () => {
      const getRouter = require('./router/router').default;
      renderWithHotReload(getRouter());
  });
}

document.body.setAttribute('style', 'margin:0px;');

function renderWithHotReload(RootElement) {
    ReactDom.render(
      <div style={{margin:'0px'}}>
      <Provider store={store}>
      <MuiThemeProvider  muiTheme={getMuiTheme()}>
        <AppContainer>
            {RootElement}
        </AppContainer>
      </MuiThemeProvider>
      </Provider>
      </div>,
        document.getElementById('app')
    )
}
