import React, { PropTypes } from 'react';
import SearchTextField from './SearchTextField';
import SearchIcon from './SearchIcon';
import VersionSelectField from './VersionSelectField';
import SearchDivider from './SearchDivider';
import * as styles from '../global/styles';

class Search extends React.Component {
  render () {
    return (
      <div style={styles.search.root}>
        <SearchIcon />
        <SearchTextField
          placeholder="jQuery..."
        />
        <SearchDivider />
        <VersionSelectField
          init="3.1.0"
          />
      </div>
    );
  }
}

export default Search;
