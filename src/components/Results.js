import React, { PropTypes } from 'react';
import LibraryResult from './LibraryResult';
import * as styles from '../global/styles';

class Results extends React.Component {
  render () {
    return (
      <div style={styles.results.root}>
        <LibraryResult />
      </div>
    );
  }
}

export default Results;
