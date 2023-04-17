import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Saved from './Saved';

describe('Saved', () => {
  it('displays text when no color schemes are saved', () => {
    render(<Saved />, { wrapper: BrowserRouter });

    expect(
      screen.getByText('There are no saved color schemes.')
    ).toBeInTheDocument();
  });
});
