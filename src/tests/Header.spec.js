import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../components/Header';
import { APP_PRIMARY_COLOR } from '../global/styles';

describe('<CopyButton />', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});
  const props = { titleText: 'cdnjs-ext' };
  const wrapper = shallowWithContext(<Header {...props} />);
});
