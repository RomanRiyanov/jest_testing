import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App testing', () => {  
  
  test('renders App', () => {
    render(<App />);
    
    // так тоже будет выбивать ошибку, но лучше описывать сценарий подробенее
    // screen.getByRole('list');
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Find zhoolik:')).toBeInTheDocument();
  });

  it('App typing into input works properly', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/zhigul/i)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'Zhigul!');

    expect(screen.getByDisplayValue(/zhigul/i)).toBeInTheDocument();
  });

  it('App filtering list properly', () => {
    act(() => {
      render(<App />);
    })
  
    expect(screen.getByText(/Mercedes/)).toBeInTheDocument();
    expect(screen.getByText(/Volvo/)).toBeInTheDocument();

    act(() => {
      userEvent.type(screen.getByRole('textbox'), 'volvo');
    })
    // userEvent.type(screen.getByRole('textbox'), 'volvo');

    expect(screen.queryByText(/mercedes/i)).toBeNull();
    expect(screen.queryByText(/volvo/i)).toBeInTheDocument();
  });
})
