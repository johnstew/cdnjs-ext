import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from '../global/styles';
import CopyToClipboard from 'react-copy-to-clipboard';

class CopyButton extends React.Component {
  constructor(props) {
    super(props);
    let { value } = this.props;

    this.state = { copied: false, value };
  }

  render () {
    return (
      <div style={styles.results.copyButton.container}>
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <RaisedButton
            label="COPY"
            backgroundColor={styles.APP_PRIMARY_COLOR}
            labelColor={styles.APP_WHITE}
            labelStyle={styles.results.copyButton.label}
            style={styles.results.copyButton.root}
          />
        </CopyToClipboard>

      </div>
    );
  }
}

CopyButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default CopyButton;
