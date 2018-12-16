import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';

describe ('User', () => {
  let component;
  const user = {
    avatar: 'avatar',
    first_name: 'first_name',
    last_name: 'last_name',
    id: 'id'
  };
  const handleDeleteClick = () => {};

  beforeEach (() => {
    component = shallow (<User user={user} handleDeleteClick={handleDeleteClick} />);
  });

  it ('test render for user', () => {
    const wrapper = component.find ('div');
    const button = component.find('button');
    expect (wrapper.find ('div')).toBeDefined ();
    expect (wrapper.find ('img')).toBeDefined ();
    expect (wrapper.find ('button')).toBeDefined ();
    expect (wrapper.find ('div')).toHaveLength (2);
    expect (wrapper.find ('img')).toHaveLength (1);
    expect (wrapper.find ('button')).toHaveLength (1);
    button.simulate('click');
  });
});
