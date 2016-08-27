import React, { PropTypes } from 'react';
import *  as styles from '../global/styles';
import AssetResult from './AssetResult';

class AssetResults extends React.Component {
  constructor(props) {
    super(props);

    this.key = 0;

    this.state = { items: [], pageIndex: 0 };

    this.handleScroll = this.handleScroll.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }

  handleScroll() {
    const libRef = this.refs.assetResults;
    const scrollPos = libRef.scrollTop + libRef.getBoundingClientRect().height;
    if (scrollPos >= libRef.scrollHeight) {
      this.setState({
        items: this.state.items.concat(this.loadItems(this.state.pageIndex + 1))
      });
    }
  }

  loadItems(pageIndex) {
    const { current, cdnURL, name } = this.props;

    this.setState({ pageIndex: this.state.pageIndex + 1 });

    return _.map(current.files[pageIndex],(asset) => {
      // update global key
      this.key++;

      return <AssetResult
        key={this.key}
        showURL={cdnURL(name, current.version, asset)}
        url={cdnURL(name, current.version, asset, true)}
      />;
    });
  }

  componentDidMount() {
    const newItems = this.loadItems(this.state.pageIndex);
    this.setState({
      items: this.state.items.concat(newItems)
    });
  }

  render () {
    return (
      <div
        style={styles.results.root}
        ref="assetResults"
        onScroll={this.handleScroll}>
        {this.state.items}
      </div>
    );
  }
}

AssetResults.propTypes = {
  current: PropTypes.object.isRequired,
  cdnURL: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default AssetResults;
