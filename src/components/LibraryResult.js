import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../global/styles';
import LibraryName from './LibraryName';
import LibraryDivider from './LibraryDivider';
import LibraryVersion from './LibraryVersion';
import LibraryDescription from './LibraryDescription';
import CopyButton from './CopyButton';

class LibraryResult extends React.Component {
  render () {
    let { name, version, description, copyValue, onSelect } = this.props;
    return (
      <Paper style={styles.results.libraryResultContainer} zDepth={2}>
        <div style={styles.results.libraryResultInner}>
          <LibraryName name={name} onClick={onSelect} />
          <LibraryDivider />
          <LibraryVersion version={version} />
          <LibraryDivider />
          <LibraryDescription text={description} />
          <CopyButton value={copyValue} />
        </div>
      </Paper>
    );
  }
}

LibraryResult.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  copyValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default LibraryResult;
