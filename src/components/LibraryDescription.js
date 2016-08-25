import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import * as styles from '../global/styles';

const LibraryDescription = (props) => {
  let { text } = props;
  return (
    <div style={styles.results.libraryDescription.root}>
      <FontIcon
        className="material-icons"
        style={styles.results.libraryDescription.icon}>
        info
      </FontIcon>
    </div>
  );
}

LibraryDescription.propTypes = {
  text: PropTypes.string.isRequired
};

export default LibraryDescription;
