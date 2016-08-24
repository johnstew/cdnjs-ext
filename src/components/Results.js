import React, { PropTypes } from 'react';
import LibraryResult from './LibraryResult';
import * as styles from '../global/styles';

class Results extends React.Component {
  render () {
    return (
      <div style={styles.results.root}>
        <LibraryResult
          name="jQuery"
          version="3.1.0"
          description="A library for doing DOM operations cuz yea tahts cool"
          copyValue="http://cdnjs.com/test.js"
        />
        <LibraryResult
          name="jQuery"
          version="3.1.0"
          description="A library for doing DOM operations cuz yea tahts cool"
          copyValue="http://cdnjs.com/test.js"
        />
        <LibraryResult
          name="jQuery"
          version="3.1.0"
          description="A library for doing DOM operations cuz yea tahts cool"
          copyValue="http://cdnjs.com/test.js"
        />
        <LibraryResult
          name="jQuery"
          version="3.1.0"
          description="A library for doing DOM operations cuz yea tahts cool"
          copyValue="http://cdnjs.com/test.js"
        />
        <LibraryResult
          name="jQuery"
          version="3.1.0"
          description="A library for doing DOM operations cuz yea tahts cool"
          copyValue="http://cdnjs.com/test.js"
        />
      </div>
    );
  }
}

export default Results;
