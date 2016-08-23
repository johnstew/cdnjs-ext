import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as styles from '../global/styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { titleText } = this.props;

    return (
      <AppBar
        style={styles.appBar.root}
        titleStyle={styles.appBar.title}
        title={titleText}
        showMenuIconButton={false}
        iconElementRight={
          <IconMenu
            style={styles.appBar.menuIcon}
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Fork Me" />
          </IconMenu>
        }
      />
    );
  }
}

Header.propTypes = {
  titleText: PropTypes.string.isRequired
};

export default Header;
