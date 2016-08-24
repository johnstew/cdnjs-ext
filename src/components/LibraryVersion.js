import React, { PropTypes } from 'react';
import * as styles from '../global/styles';

const LibraryVersion = (props) => {
  let { version } = props;
  return (
    <div style={styles.results.libraryVersion.root}>
      <span style={styles.results.libraryVersion.version}>{version}</span>
    </div>
  );
}

LibraryVersion.propTypes = {
  version: PropTypes.string.isRequired
};

export default LibraryVersion;
