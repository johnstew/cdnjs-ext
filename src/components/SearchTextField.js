import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import * as styles from '../global/styles';

class SearchTextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.focus = () => this.refs.searchInput.focus();
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  setPlaceholder() {
    const { placeholder } = this.props;
    this.refs.searchInput.input.placeholder = placeholder;
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleKeyDown(e) {
    const { search } = this.props;
    if (e.keyCode === 13) {
      search(this.state.value);
    }
  }

  componentDidMount() {
    this.setPlaceholder();
    this.focus();
  }

  render () {
    let { placeholder, fullWidth } = this.props;
    return (
      <div style={fullWidth ? { width: '100%' } : { width: '297px' }}>
        <TextField
          underlineFocusStyle={styles.search.textFieldUnderline}
          id="searchInput"
          ref="searchInput"
          fullWidth={true}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

SearchTextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  search: PropTypes.func.isRequired
};

export default SearchTextField;
