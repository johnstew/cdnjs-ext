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
    const { versionChange, selected } = this.props;
    this.setState({value});

    versionChange({ version: value, files: selected.assets[index].files });
  }

  render () {
    const { versions } = this.props;
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.search.versionSelect.root}
          autoWidth={false}
          maxHeight={200}
        >
          {
            _.map(versions, (v,i) => <MenuItem
              key={i}
              value={v}
              primaryText={v}
            />)
          }
        </SelectField>
      </div>
    );
  }
}

VersionSelectField.propTypes = {
  init: PropTypes.string.isRequired,
  versions: PropTypes.array.isRequired
};

export default VersionSelectField;
