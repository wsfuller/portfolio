import React from 'react';
import { render, screen } from '../../test-utils';

import AppBar from './AppBar';

describe('AppBar', () => {
  it('renders', () => {
    render(<AppBar themeToggle={() => false} />);

    const element = screen.queryByTestId('app--appBar');

    expect(element).toBeInTheDocument();
  });
});
