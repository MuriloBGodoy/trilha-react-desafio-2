import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { api } from '../services/api';

jest.mock('../services/api');

test('renderiza o input e o botao de busca', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/usuario\/repositorio/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
});

test('busca e exibe repositorio na lista', async () => {
  api.get.mockResolvedValueOnce({
    data: {
      id: 12345,
      name: 'react',
      full_name: 'facebook/react',
      description: 'The library for web and native user interfaces',
      html_url: 'https://github.com/facebook/react',
    },
  });

  render(<App />);

  const input = screen.getByPlaceholderText(/usuario\/repositorio/i);
  fireEvent.change(input, { target: { value: 'facebook/react' } });

  const button = screen.getByRole('button', { name: /buscar/i });
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText('facebook/react')).toBeInTheDocument();
  });
});

test('remove repositorio da lista ao clicar em Remover', async () => {
  api.get.mockResolvedValueOnce({
    data: {
      id: 999,
      name: 'teste-repo',
      full_name: 'user/teste-repo',
      html_url: 'https://github.com/user/teste-repo',
    },
  });

  render(<App />);

  const input = screen.getByPlaceholderText(/usuario\/repositorio/i);
  fireEvent.change(input, { target: { value: 'user/teste-repo' } });
  fireEvent.click(screen.getByRole('button', { name: /buscar/i }));

  await waitFor(() => {
    expect(screen.getByText('user/teste-repo')).toBeInTheDocument();
  });

  const removeButton = screen.getByText('Remover');
  fireEvent.click(removeButton);

  expect(screen.queryByText('user/teste-repo')).not.toBeInTheDocument();
});
