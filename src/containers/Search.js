import React, { PropTypes } from 'react';
import SearchTextField from '../components/SearchTextField';
import SearchIcon from '../components/SearchIcon';
import VersionSelectField from '../components/VersionSelectField';
import SearchDivider from '../components/SearchDivider';
import * as styles from '../global/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { search } from '../actions/search';
import { versionChange } from '../actions/select';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { ui, selected } = this.props;

    if (ui.searchPage) {
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
    } else if (ui.assetPage) {
      return (
        <div style={styles.search.root}>
          <SearchIcon />
          <SearchTextField
            placeholder="jQuery..."
            {...this.props}
          />
          <SearchDivider />
          <VersionSelectField
            init={selected.versions.current.version}
            versions={selected.versions.all}
            {...this.props}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    selected: state.selected.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ search, versionChange }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
