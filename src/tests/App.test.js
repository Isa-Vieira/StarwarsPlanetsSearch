import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
  test('teste filtros da aplicação', async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(Mock),
  }); 
    await act(async () => renderWithContext(<App />))
    await waitFor(() => screen.getByText('Tatooine'))
    const names = screen.getByTestId('column-filter')
    const maiorMenor = screen.getByTestId ('comparison-filter')
    const values = screen.getByTestId('value-filter')
    const buttonFiltrar = screen.getByRole('button', {  name: /filtrar/i})


    userEvent.selectOptions(names, 'surface_water')
    userEvent.selectOptions(maiorMenor, 'menor que')
    userEvent.type(values, '12')
    userEvent.click(buttonFiltrar)
    const todasAsRoles = screen.getAllByRole('row')


    expect(names).toBeInTheDocument();
    expect(maiorMenor).toBeInTheDocument();
    expect(values).toBeInTheDocument();
    expect(buttonFiltrar).toBeInTheDocument();
  })
  test('teste filtros da aplicação', async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(Mock),
  }); 
    await act(async () => renderWithContext(<App />))
    await waitFor(() => screen.getByText('Tatooine'))
    const names = screen.getByTestId('column-filter')
    const maiorMenor = screen.getByTestId ('comparison-filter')
    const values = screen.getByTestId('value-filter')
    const buttonFiltrar = screen.getByRole('button', {  name: /filtrar/i})


    userEvent.selectOptions(names, 'surface_water')
    userEvent.selectOptions(maiorMenor, 'igual a')
    userEvent.type(values, '1')
    userEvent.click(buttonFiltrar)
    const todasAsRoles = screen.getAllByRole('row')


    expect(names).toBeInTheDocument();
    expect(maiorMenor).toBeInTheDocument();
    expect(values).toBeInTheDocument();
    expect(buttonFiltrar).toBeInTheDocument();
  })
  
})