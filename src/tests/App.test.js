import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import Mock from './Mock';
import userEvent from '@testing-library/user-event';
import { renderWithContext } from './RenderWithContext'

/* test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
}); */
describe('teste o requisito 5', () => {
  test('teste se o botão está funcionando', async () => {
  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(Mock),
  });
   await act(async () => renderWithContext(<App />));
   const buttonConst = screen.getByRole('button', {
    name: /Filtrar/i
   })
   
   expect(buttonConst).toBeInTheDocument();
   userEvent.click(buttonConst)
  })
})