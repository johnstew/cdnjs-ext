import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../global/styles';

class LibraryResult extends React.Component {
  render () {
    return (
      <Paper style={styles.results.libraryResultContainer} zDepth={1}>
        <h3>Hello</h3>
      </Paper>
    );
  }
}

export default LibraryResult;
