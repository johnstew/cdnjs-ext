import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../global/styles';
import CopyButton from './CopyButton';
import AssetURL from './AssetURL';

class AssetResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { url, showURL } = this.props;
    return (
      <Paper style={styles.results.assetResultContainer} zDepth={2}>
        <AssetURL url={showURL} />
        <CopyButton value={url} />
      </Paper>
    );
  }
}

AssetResult.propTypes = {
  url: PropTypes.string.isRequired,
  showURL: PropTypes.string.isRequired
};

export default AssetResult;
