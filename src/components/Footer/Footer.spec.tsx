import React from 'react';
import { render, screen } from '../../test-utils';

import Footer from './Footer';

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />);

    const element = screen.queryByTestId('app-footer');

    expect(element).toBeInTheDocument();
  });
});
