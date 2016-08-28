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
      const newIndex = this.state.pageIndex + 1;
      const { current } = this.props;
      const newItems = this.loadItems(newIndex, current);
      this.setState({
        items: this.state.items.concat(newItems),
        pageIndex: newIndex
      });
    }
  }

  loadItems(pageIndex, current) {
    const { cdnURL, name } = this.props;

    return _.map(current.files[pageIndex], (asset) => {
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
    const { current } = this.props;
    const newItems = this.loadItems(0, current);

    this.setState({
      items: newItems,
      pageIndex: 0
    });
  }

  componentWillReceiveProps(newProps) {
    const { version, versionChangeDone, current } = newProps; // bad name but means if version changed

    if (version) {
      this.refs.assetResults.scrollTop = 0;
      this.key = 0;
      const newItems = this.loadItems(0, current);
      this.setState({
        items: newItems,
        pageIndex: 0
      });
      versionChangeDone();
    }
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
  name: PropTypes.string.isRequired,
  version: PropTypes.bool.isRequired,
  versionChangeDone: PropTypes.func.isRequired
};

export default AssetResults;
