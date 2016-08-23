/* Global */
export const APP_PRIMARY_COLOR = '#DD4814';

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
    height: 'auto',
    maxHeight: '400px',
    margin: 'auto'
  },
  headerContainer: {
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.24)',
    position: 'relative'
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
    background: '#D1D1D1',
    height: '28px',
    margin: '0 20px',
    alignSelf: 'center'
  },
  textFieldContainer: {
    width: '297px'
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
    color: '#000000',
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
    background: '#EEEEEE',
    padding: '20px'
  },
  libraryResultContainer: {
    width: '100%',
    height: '47px',
    borderRadius: '3px',
    padding: '13px 20px'
  }
};
