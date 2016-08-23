import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as styles from '../global/styles';

class VersionSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.init };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render () {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.search.versionSelect.root}
        >
          <MenuItem value="3.1.0" primaryText="3.1.0" />
          <MenuItem value="2.2.0" primaryText="2.2.0" />
        </SelectField>
      </div>
    );
  }
}

VersionSelectField.propTypes = {
  init: PropTypes.string.isRequired
};

export default VersionSelectField;
