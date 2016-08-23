import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import * as styles from '../global/styles';

class SearchIcon extends React.Component {
  render () {
    return (
      <div style={styles.search.iconContainer}>
        <FontIcon className="material-icons" style={styles.search.icon}>
          search
        </FontIcon>
      </div>
    );
  }
}

export default SearchIcon;
