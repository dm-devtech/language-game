import FrenchNouns from './FrenchNouns';
import React, { Component } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

/**
 * @jest-environment jsdom
*/

test('testing result', async () => {
  const fakeApi = [
      {
        id: 1,
        eng: "pan",
        fre: "poêle",
        wordtype: "noun",
        category: "kitchen",
        gender: "la",
        difficulty: "easy"
      }]

  const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() => {
    const fetchResponse = {
      ok: true,
      json: () => Promise.resolve(fakeApi),
      status: 200
    };
    return Promise.resolve(fetchResponse);
  })

  const { getByText } = render(<FrenchNouns />);
  const correctButton = getByText("poêle")

  fireEvent.click(correctButton);

  expect(getByText("Correct")).toBeInTheDocument()
  
})

test.only('testing first answer button', () => {
  const spy = jest.spyOn(FrenchNouns.prototype, 'nextWord');
  const { getByTestId } = render(<FrenchNouns />, { wrapper: BrowserRouter });
  const frenchButton = getByTestId('a')
  fireEvent.click(frenchButton);
  expect(spy).toHaveBeenCalledTimes(1);
  FrenchNouns.prototype.renderRedirectFrench.mockRestore();
 });