import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoComplete from 'material-ui/AutoComplete';
import * as styles from '../global/styles';

class SearchAutoComplete extends Component {
  constructor() {
    super();

    this.handleRequest = this.handleRequest.bind(this);
    this.getDataSource = this.getDataSource.bind(this);
  }


  handleRequest(value) {
    const { search } = this.props;
    search(value);
  }

  getDataSource() {
    const { ac } = this.props;
    if (ac) {
      const ds = ac.results.map(r => r.name);
      return ds;
    }
    return [];
  }

  render() {
    const { fullWidth, placeholder } = this.props;
    return (
      <div style={fullWidth ? { width: '100%' } : { width: '277px' }}>
        <AutoComplete
          underlineFocusStyle={styles.search.textFieldUnderline}
          id="searchInput"
          ref="searchInput"
          fullWidth={true}
          onNewRequest={this.handleRequest}
          onKeyDown={this.handleKeyDown}
          dataSource={this.getDataSource()}
          filter={AutoComplete.caseInsensitiveFilter}
          maxSearchResults={10}
          hintText={placeholder}
        />
      </div>
    );
  }
}

export default SearchAutoComplete;
