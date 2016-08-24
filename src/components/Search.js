import React, { PropTypes } from 'react';
import SearchTextField from './SearchTextField';
import SearchIcon from './SearchIcon';
import VersionSelectField from './VersionSelectField';
import SearchDivider from './SearchDivider';
import * as styles from '../global/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { search } from '../actions/search';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showVersion: false
    };
  }

  render () {
    if (!this.state.showVersion) {
      return (
        <div style={styles.search.root}>
          <SearchIcon />
          <SearchTextField
            placeholder="jQuery..."
            fullWidth={true}
            {...this.props}
          />
        </div>
      );
    } else {
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
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ search }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
