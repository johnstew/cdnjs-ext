import React, { PropTypes } from 'react';
import * as styles from '../global/styles';

const AssetURL = (props) => {
  const { url } = props;
  return (
    <span style={styles.results.assetURL}>
      {url}
    </span>
  );
};

AssetURL.propTypes = {
  url: PropTypes.string.isRequired
};

export default AssetURL;
