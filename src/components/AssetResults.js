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
    const { incrementPageIndex } = this.props;
    if (scrollPos >= libRef.scrollHeight) {
      this.setState({
        items: this.state.items.concat(this.loadItems(this.state.pageIndex + 1))
      });
    }
  }

  loadItems(pageIndex) {
    const { pages, select } = this.props;

    this.setState({ pageIndex: this.state.pageIndex + 1 });

    return _.map(pages[pageIndex],(r) => {
      // update global key
      this.key++;

      return <LibraryResult
        key={this.key}
        name={r.name}
        version={r.assets[0].version}
        info={r}
        copyValue={r.latest}
        onSelect={() => select(_.assign({}, r, {
          versions: {
            current: r.assets[0],
            all: _.map(r.assets, (a) => a.version)
          }
        }))}
      />
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
  pages: PropTypes.array.isRequired,
  pageIndex: PropTypes.number.isRequired,
  incrementPageIndex: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired
};

export default AssetResults;
