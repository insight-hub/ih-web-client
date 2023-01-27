import React from 'react';
import renderer from 'react-test-renderer';

import { Layout } from './';

describe('Layout', () => {
  it('should render correct', () => {
    const component = renderer.create(<Layout />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
