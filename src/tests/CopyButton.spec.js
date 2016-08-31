import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CopyButton from '../components/CopyButton';
import RaisedButton from 'material-ui/RaisedButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import { APP_PRIMARY_COLOR, APP_WHITE } from '../global/styles';

describe('<CopyButton />', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});
  const props = {
    value: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'
  };
  const wrapper = shallowWithContext(<CopyButton {...props} />);

  it('should contain <CopyToClipboard /> component', () => {
    expect(wrapper.find(CopyToClipboard)).to.have.length(1);
  });

  it('should contain <RaisedButton /> component', () => {
    expect(wrapper.find(RaisedButton)).to.have.length(1);
  });

  describe('<CopyToClipboard />', () => {

    it('should have 1 child', () => {
      expect(wrapper.find(CopyToClipboard)).to.have.length(1);
    });

    it('should contain a <RaisedButton />', () => {
      expect(wrapper.find(CopyToClipboard).find(RaisedButton)).to.have.length(1);
    });

  });

  describe('<RaisedButton />', () => {
    it(`background renders primary app color ${APP_PRIMARY_COLOR}`, () => {
      const buttonColor = wrapper.find(RaisedButton).props().backgroundColor;
      expect(buttonColor).to.equal(APP_PRIMARY_COLOR);
    });

    it(`label color renders white`, () => {
      const labelColor = wrapper.find(RaisedButton).props().labelColor;
      expect(labelColor).to.equal(APP_WHITE);
    });
  });
});
