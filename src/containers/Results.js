import React, { PropTypes } from 'react';
import LibraryResult from '../components/LibraryResult';
import AssetResult from '../components/AssetResult';
import Loader from '../components/Loader';
import * as styles from '../global/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/select';
import { cdnURL } from '../global/utils';
import { incrementPageIndex } from '../actions/pagination';
import LibraryResults from '../components/LibraryResults';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { results, select, ui, selected, incrementPageIndex } = this.props;
    if (ui.searchPage && results && !ui.loading) {
      const { pages, pageIndex } = results;
      return <LibraryResults
        pages={pages}
        pageIndex={pageIndex}
        incrementPageIndex={incrementPageIndex}
        select={select}
      />;
    } else if (ui.assetPage) {
      const { name } = selected;
      const { current } = selected.versions;
      return (
        <div style={styles.results.root}>
          {
            _.map(current.files, (asset, i) => {
              return <AssetResult
                key={i}
                showURL={cdnURL(name, current.version, asset)}
                url={cdnURL(name, current.version, asset, true)}
              />
            })
          }
        </div>
      );
    } else if (ui.loading) {
      return (
        <div style={styles.results.root}>
          <Loader />
        </div>
      );
    } else {
      return (
        <div style={styles.results.root}>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results,
    ui: state.ui,
    selected: state.selected.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ select, incrementPageIndex }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
