import React, { PropTypes } from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Paper from 'material-ui/paper';
import * as styles from '../global/styles';

const App = (props) => {
  return (
    <div style={styles.app.root}>
      <Paper>
        <div style={styles.app.headerContainer}>
          <Header titleText="cdnjs-ext" />
          <Search />
        </div>
        <Results />
      </Paper>
    </div>
  );
}

export default App;
