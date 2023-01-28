import React from 'react';
import renderer from 'react-test-renderer';

import { Column } from './';

describe('Column', () => {
  it('should render correct', () => {
    const component = renderer.create(<Column cols={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with breakpoints', () => {
    const component = renderer.create(
      <Column
        cols={{ xs: 2, sm: 5, md: 2, lg: 2, xl: 1 }}
        offset={{ xs: 2, sm: 5, md: 2, lg: 2, xl: 1 }}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
