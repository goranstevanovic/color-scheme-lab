import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('displays the create button', () => {
    render(<Button type="create" />);

    expect(screen.getByText(/create color scheme/i)).toBeInTheDocument();

    expect(screen.queryByText(/save color scheme/)).not.toBeInTheDocument();
    expect(screen.queryByText(/delete color scheme/i)).not.toBeInTheDocument();
  });

  it('displays the save button', () => {
    render(<Button type="save" />);

    expect(screen.getByText(/save color scheme/i)).toBeInTheDocument();

    expect(screen.queryByText(/create color scheme/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/delete color scheme/i)).not.toBeInTheDocument();
  });

  it('displays the delete button', () => {
    render(<Button type="delete" />);

    expect(screen.getByText(/delete color scheme/i)).toBeInTheDocument();

    expect(screen.queryByText(/create color scheme/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/save color scheme/i)).not.toBeInTheDocument();
  });
});
