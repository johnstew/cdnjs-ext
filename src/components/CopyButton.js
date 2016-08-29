import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from '../global/styles';
import CopyToClipboard from 'react-copy-to-clipboard';

class CopyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { copied: false };
  }

  render () {
    const { value } = this.props;
    return (
      <div style={styles.results.copyButton.container}>
        <CopyToClipboard text={value}
          onCopy={() => this.setState({copied: true})}>
          <RaisedButton
            label="COPY"
            backgroundColor={styles.APP_PRIMARY_COLOR}
            labelColor={styles.APP_WHITE}
            labelStyle={styles.results.copyButton.label}
            rippleStyle={styles.results.copyButton.ripple}
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
