import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AssetURL from '../components/AssetURL';

describe('<AssetURL />', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});
  const props = {
    url: '/jquery/3.1.0/jquery.min.js'
  };
  const wrapper = shallowWithContext(<AssetURL {...props} />);

  it(`shoulder render the url ${props.url} as a child`, () => {
    expect(wrapper.props().children).to.equal(props.url);
  });
});
