import React, { PropTypes } from 'react';
import * as styles from '../global/styles';

const LibraryDescription = (props) => {
  let { text } = props;
  return (
    <div style={styles.results.libraryDescription.root}>
      <span style={styles.results.libraryDescription.text}>{text}</span>
    </div>
  );
}

LibraryDescription.propTypes = {
  text: PropTypes.string.isRequired
};

export default LibraryDescription;
