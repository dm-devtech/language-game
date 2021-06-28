import FrenchNouns from './FrenchNouns';
import React, { Component } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  })
  
  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  })

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

    await waitFor(() => expect(getByText("Correct")).toBeInTheDocument())
  
})
