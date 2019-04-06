import React from "react";
import { shallow } from "enzyme";

import DefaultRoute from './DefaultRoute';

const setup = (props={}) => {
  const component = shallow(<DefaultRoute />);
  return component;
};

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

describe('DefaultRoute Component', () => {
  
  let component;
  beforeEach(() => {
    component  = setup();
  })
    
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, "DefaultRoute");
    expect(wrapper.length).toBe(1);
  });
    
  it('Should say "Page Not Found"', () => {
    const wrapper = findByTestAttr(component, "DefaultRoute");
    expect(wrapper.text()).toBe("Page Not Found");
  });
});
