import React from "react";
import { shallow } from "enzyme";

import MovieDetail from './MovieDetail';

const setup = (props={}) => {
  const match = { params: { id: 6 } }
  const component = shallow(<MovieDetail {...props} match={ match } />);
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
    const wrapper = findByTestAttr(component, "MovieDetail");
    expect(wrapper.length).toBe(1);
  });
    
  it('Should render correct id', () => {
    const wrapper = findByTestAttr(component, "MovieDetail");
    expect(wrapper.text().includes("Movie Detail 6")).toBe(true);
  });
});
