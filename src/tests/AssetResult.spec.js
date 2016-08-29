import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';
import AssetResult from '../components/AssetResult';

describe('<AssetResult />', () => {
  it('calls componentDidMount', () => {
    const props = {
      url: 'http://google.com',
      showURL: 'http://google.com'
    };
    const wrapper = shallow(<AssetResult {...props} />);
    expect(AssetResult.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
