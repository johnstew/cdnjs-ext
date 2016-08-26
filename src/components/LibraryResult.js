import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../global/styles';
import LibraryName from './LibraryName';
import LibraryDivider from './LibraryDivider';
import LibraryVersion from './LibraryVersion';
import LibraryInfoButton from './LibraryInfoButton';
import CopyButton from './CopyButton';
import InfoDescription from './InfoDescription';
import InfoHomePage from './InfoHomePage';
import InfoKeywords from './InfoKeywords';

class LibraryResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: false };
    this.handleInfoClick = this.handleInfoClick.bind(this);
  }

  handleInfoClick() {
    this.setState({ showInfo: !this.state.showInfo });
  }

  render () {
    let { name, version, info, copyValue, onSelect } = this.props;
    if (this.state.showInfo) {
      const ts = _.assign({}, styles.results.libraryResultContainer, {
        height: 'auto'
      });

      return (
        <Paper style={ts} zDepth={2}>
          <div style={styles.results.libraryResultInner}>
            <LibraryName name={name} onClick={onSelect} />
            <LibraryDivider />
            <LibraryVersion version={version} />
            <LibraryDivider />
            <LibraryInfoButton onClick={this.handleInfoClick} />
            <CopyButton value={copyValue} />
          </div>
          <div style={styles.results.infoContainer}>
            <InfoDescription description={info.description} />
            <InfoHomePage homePage={info.homepage} />
            <InfoKeywords keywords={info.keywords} />
          </div>
        </Paper>
      );
    } else {
      return (
        <Paper style={styles.results.libraryResultContainer} zDepth={2}>
          <div style={styles.results.libraryResultInner}>
            <LibraryName name={name} onClick={onSelect} />
            <LibraryDivider />
            <LibraryVersion version={version} />
            <LibraryDivider />
            <LibraryInfoButton onClick={this.handleInfoClick} />
            <CopyButton value={copyValue} />
          </div>
        </Paper>
      );
    }
  }
}

LibraryResult.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  copyValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default LibraryResult;
