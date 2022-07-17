import React from 'react';
import { render, screen } from '../../test-utils';

import Section from './Section';

describe('Section', () => {
  it('renders', () => {
    render(
      <Section title="Test section" id="test-section" testid="test-section">
        content
      </Section>
    );

    const element = screen.queryByTestId('test-section');

    expect(element).toBeInTheDocument();
  });
});
