/* Global */
export const APP_PRIMARY_COLOR = '#DD4814';
export const APP_DARK_GREY = '#727272';
export const APP_GREY = '#D1D1D1';
export const APP_LIGHT_GREY = '#EEEEEE';
export const APP_BLACK = '#000000';
export const APP_WHITE = '#FFFFFF';

/* Header - App Bar */
export const appBar = {
  root: {
    height: '55px',
    background: APP_PRIMARY_COLOR,
  },
  title: {
    height: '55px',
    lineHeight: '55px',
    fontSize: '20px'
  },
  menuIcon: {
    marginTop: '-4px'
  }
};

/* App */
export const app = {
  root: {
    width: '500px',
    height: '400px',
    margin: 'auto',
    position: 'relative'
  },
  headerContainer: {
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.24)',
    position: 'absolute',
    top: '0',
    height: '103px',
    background: APP_WHITE,
    zIndex: '1',
    width: '100%'
  }
};

/* SearchTextField */
export const search = {
  root: {
    padding: '0 20px',
    display: 'flex'
  },
  divider: {
    width: '1px',
    background: APP_GREY,
    height: '28px',
    margin: '0 20px',
    alignSelf: 'center'
  },
  textFieldUnderline: {
    borderColor: APP_PRIMARY_COLOR
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '37px'
  },
  icon: {
    color: APP_BLACK,
  },
  versionSelect: {
    root: {
      width: '75px'
    },
    underline: {
      borderColor: APP_PRIMARY_COLOR
    }
  }
};

/* Results */
export const results = {
  root: {
    background: APP_LIGHT_GREY,
    padding: '20px',
    overflowY: 'scroll',
    maxHeight: '257px',
    top: '103px',
    position: 'relative'
  },
  libraryResultContainer: {
    width: '100%',
    height: '47px',
    borderRadius: '3px',
    padding: '13px 20px',
    display: 'flex',
    margin: '0 0 20px 0',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  libraryName: {
    root: {
      alignSelf: 'center'
      // flexGrow: 2
    },
    name: {
      color: APP_PRIMARY_COLOR,
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: '18px'
    }
  },
  libraryDivider: {
    width: '1px',
    background: APP_GREY,
    height: '22px',
    margin: '0 13px',
    alignSelf: 'center'
  },
  libraryVersion: {
    root: {
      alignSelf: 'center'
    },
    version: {
      color: APP_DARK_GREY,
      fontSize: '12px'
    }
  },
  libraryDescription: {
    root: {
      alignSelf: 'center',
      maxWidth: '185px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    text: {
      color: APP_DARK_GREY,
      fontSize: '12px'
    },
    icon: {
      color: APP_PRIMARY_COLOR
    }
  },
  copyButton: {
    root: {
      height: '23px',
      width: '61px',
      minWidth: 'none'
    },
    container: {
      alignSelf: 'center',
      marginLeft: 'auto'
    },
    label: {
      fontSize: '14px',
      padding: '0',
      top: '2px'
    }
  }
};
