import React, { PropTypes } from 'react';
import LibraryResult from '../components/LibraryResult';
import AssetResult from '../components/AssetResult';
import Loader from '../components/Loader';
import * as styles from '../global/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/select';
import { cdnURL } from '../global/utils';

class Results extends React.Component {
  render () {
    const { results, select, ui, selected } = this.props;
    if (ui.searchPage && results && !ui.loading) {
      const { pageIndex, pages } = results;
      return (
        <div style={styles.results.root}>
          {
            _.times(pageIndex, (i) => {
              return _.map(pages[i],(r,i) => (
                <LibraryResult
                  key={i}
                  name={r.name}
                  version={r.assets[0].version}
                  info={r}
                  copyValue={r.latest}
                  onSelect={() => select(_.assign({}, r, {
                    versions: {
                      current: r.assets[0],
                      all: _.map(r.assets, (a) => a.version)
                    }
                  }))}
                />
              ))
            })
          }
        </div>
      );
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
  return bindActionCreators({ select }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
