import {h, Component} from 'preact';
import {Router} from 'preact-router';

import Header from './header';
import OneVsOne from './one_vs_one';
import Honko from './honko';
import Drawer from './drawer';

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Drawer />
        <Header />
        <Router>
          <OneVsOne path='/' />
          <Honko path='/oneVsAll/' mode='ONE_VS_ALL' />
          <Honko path='/allVsOne/' mode='ALL_VS_ONE' />
        </Router>
      </div>
    );
  }
}
