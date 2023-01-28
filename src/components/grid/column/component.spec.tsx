import React from 'react';
import renderer from 'react-test-renderer';

import { Column } from './';

describe('Column', () => {
  it('should render correct', () => {
    const component = renderer.create(<Column cols={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
