import React from "react";
import { shallow } from "enzyme";
import Loader from "../Loader";

describe("Loader", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Loader />);
  });

  it('test render for static Loader', () => {
    const wrapper = component.find('Fragment');
    expect(wrapper.find('div')).toBeDefined();
    expect(wrapper.find('div')).toHaveLength(3);
    expect(
      wrapper.contains(
        <React.Fragment>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </React.Fragment>
      )
    ).toBeTruthy();
  });
});
