import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import * as styles from '../global/styles';

class SearchTextField extends React.Component {
  constructor(props) {
    super(props);

    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.focus = () => this.refs.searchInput.focus();
  }

  setPlaceholder() {
    const { placeholder } = this.props;
    this.refs.searchInput.input.placeholder = placeholder;
  }

  componentDidMount() {
    this.setPlaceholder();
    this.focus();
  }

  render () {
    let { placeholder } = this.props;
    return (
      <div>
        <TextField
          underlineFocusStyle={styles.search.textFieldUnderline}
          id="searchInput"
          ref="searchInput"
          fullWidth={true}
          style={styles.search.textFieldContainer}
        />
      </div>
    );
  }
}

SearchTextField.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default SearchTextField;
