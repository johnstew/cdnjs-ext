import React, { PropTypes } from 'react';
import LibraryResult from './LibraryResult';
import * as styles from '../global/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Results extends React.Component {
  render () {
    const { results } = this.props;

    console.log(results);
    if (results) {
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
                  description={r.description}
                  copyValue={r.latest}
                />
              ))
            })
          }
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
    results: state.search.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
