import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

describe('Header', () => {
  it('displays the app title', () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Color Scheme Lab/)).toBeInTheDocument();
  });

  it('displays the navigation bar with all the links', () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Create/)).toBeInTheDocument();
    expect(screen.getByText(/Saved/)).toBeInTheDocument();
  });

  it('displays the select menu with label', () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByLabelText(/Color mode/)).toBeInTheDocument();
  });
});
