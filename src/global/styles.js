/* Global */
export const APP_PRIMARY_COLOR = '#DD4814';
export const APP_DARK_GREY = '#727272';
export const APP_GREY = '#D1D1D1';
export const APP_LIGHT_GREY = '#EEEEEE';
export const APP_BLACK = '#000000';
export const APP_WHITE = '#FFFFFF';
export const APP_LIGHT_BLUE = '#2196F3';

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
      width: '90px'
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
    position: 'relative',
    height: '100%'
  },
  libraryResultContainer: {
    width: '100%',
    height: '47px',
    borderRadius: '3px',
    padding: '13px 20px',
    margin: '0 0 20px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  libraryResultInner: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  assetResultContainer: {
    width: '100%',
    height: '47px',
    borderRadius: '3px',
    padding: '13px 20px',
    margin: '0 0 20px 0',
    display: 'flex'
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
      fontSize: '13px'
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
      color: APP_PRIMARY_COLOR,
      display: 'flex'
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
      top: '3px'
    },
    ripple: {
      color: '#000000'
    }
  },
  assetURL: {
    color: APP_DARK_GREY,
    fontSize: '12px',
    alignSelf: 'center'
  },
  infoContainer: {
    display: 'block',
    width: '100%',
    padding: '20px 0px 0px 0px'
  },
  infoDescriptionContainer: {
    display: 'block',
    marginBottom: '10px'
  },
  infoDescription: {
    color: APP_DARK_GREY,
    fontSize: '12px'
  },
  infoHomePageContainer: {
    display: 'block',
    marginBottom: '20px'
  },
  infoHomePageLink: {
    color: APP_LIGHT_BLUE,
    fontSize: '12px'
  },
  infoChipContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  infoChip: {
    marginRight: '5px',
    marginBottom: '10px'
  }
};
