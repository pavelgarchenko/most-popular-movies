import React from "react";
import { shallow } from "enzyme";

import PopularMovies from './PopularMovies';

const setup = (props={}) => {
  const component = shallow(<PopularMovies {...props} />);
  return component;
};


const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};


describe('PopularMovies Component', () => {
  
  let component;
  beforeEach(() => {
    component  = setup();
  })
    
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, "PopMovies");
    expect(wrapper.length).toBe(1);
  });
});
