import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import * as styles from '../global/styles';

const LibraryDescription = (props) => {
  let { text } = props;
  return (
    <div
      style={styles.results.libraryDescription.root}
      onClick={props.onClick}>
      <FontIcon
        className="material-icons"
        style={styles.results.libraryDescription.icon}>
        info
      </FontIcon>
    </div>
  );
}

export default LibraryDescription;
