import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('displays the app title', () => {
    render(<Header />);

    expect(screen.getByText(/Color Scheme Lab/)).toBeInTheDocument();
  });

  it('displays the navigation bar with all the links', () => {
    render(<Header />);

    expect(screen.getByText(/Create/)).toBeInTheDocument();
    expect(screen.getByText(/Saved/)).toBeInTheDocument();
  });

  it('displays the select menu with label', () => {
    render(<Header />);

    expect(screen.getByLabelText(/Color mode/)).toBeInTheDocument();
  });
});
