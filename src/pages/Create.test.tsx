import { render, screen } from '@testing-library/react';

import Create from './Create';

describe('Create', () => {
  it('displays the create button', () => {
    render(<Create />);

    expect(screen.getByText(/Create/)).toBeInTheDocument();
  });

  it('displays the save button', () => {
    render(<Create />);

    expect(screen.getByText(/Save/)).toBeInTheDocument();
  });
});
