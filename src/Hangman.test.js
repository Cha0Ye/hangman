import React from 'react';
import Hangman from './Hangman';
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";

it('render without error', function(){
    mount(<Hangman />);
})

it("matches snapshot", function() {
    let wrapper = shallow(<Hangman />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it("handsles correct guess", function() {
    let wrapper = shallow(<Hangman />);
    wrapper
    .find("button[value='a']")
    .simulate("click", { target: { value: "a" } });
    expect(wrapper.state().nWrong).toEqual(0);
    expect(wrapper.state().guessed).toEqual(new Set('a'));
    expect(wrapper.find('.Hangman-word').text()).toEqual('a____');
    console.log('debug is ', wrapper.find('img').props().src)
    expect(wrapper.find('img').props().src).toEqual('0.jpg');
    
  });

