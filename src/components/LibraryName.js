import React, { PropTypes } from 'react';
import * as styles from '../global/styles';

const LibraryName = (props) => {
  let { name } = props;
  return (
    <div style={styles.results.libraryName.root}>
      <span style={styles.results.libraryName.name}>{name}</span>
    </div>
  );
}

LibraryName.propTypes = {
  name: PropTypes.string.isRequired
};

export default LibraryName;
