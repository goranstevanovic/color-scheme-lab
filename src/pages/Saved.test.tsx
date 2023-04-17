import { render, screen } from '@testing-library/react';

import Saved from './Saved';

describe('Saved', () => {
  it('should display the sample text', () => {
    render(<Saved />);

    expect(screen.getByText(/Saved page/)).toBeInTheDocument();
  });
});
