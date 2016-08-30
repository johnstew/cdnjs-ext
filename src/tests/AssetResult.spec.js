import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import AssetResult from '../components/AssetResult';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AssetURL from '../components/AssetURL';
import CopyButton from '../components/CopyButton';

describe('<AssetResult />', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});
  const props = {
    url: 'http://google.com',
    showURL: 'http://google.com'
  };
  const wrapper = shallowWithContext(<AssetResult {...props} />);

  it('should render <AssetURL />', () => {
    expect(wrapper.find(AssetURL)).to.have.length(1);
  });

  it('should render <CopyButton />', () => {
    expect(wrapper.find(CopyButton)).to.have.length(1);
  });

  it(`should pass prop url to CopyButton value prop that equals ${props.url}`, () => {
    expect(wrapper.find(CopyButton).props().value).to.equal(props.url);
  });

  it(`should pass prop showURL to AssetURL url prop that equals ${props.showURL}`, () => {
    expect(wrapper.find(AssetURL).props().url).to.equal(props.showURL);
  });
});
