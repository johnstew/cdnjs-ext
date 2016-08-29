import React, { PropTypes } from 'react';
import Header from '../components/Header';
import Search from '../containers/Search';
import Results from '../containers/Results';
import Paper from 'material-ui/paper';
import * as styles from '../global/styles';
import { connect } from 'react-redux';

const App = (props) => {
  const { ui } = props;
  const rootStyles = _.assign({}, styles.app.root, {
    height: ui.initSearch ? '103px' : '400px',
    overflow: ui.initSearch ? 'hidden' : 'initial'
  });

  return (
    <div>
      <Paper style={rootStyles}>
        <div style={styles.app.headerContainer}>
          <Header titleText="cdnjs-ext" />
          <Search />
        </div>
        <Results />
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ui: state.ui
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
