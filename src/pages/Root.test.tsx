import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';

describe('Root', () => {
  it('displays the app title', () => {
    render(<Root />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Color Scheme Lab/)).toBeInTheDocument();
  });
});
