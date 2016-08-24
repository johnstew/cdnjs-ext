import React, { PropTypes } from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Paper from 'material-ui/paper';
import * as styles from '../global/styles';

const App = (props) => {
  return (
    <div>
      <Paper style={styles.app.root}>
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
