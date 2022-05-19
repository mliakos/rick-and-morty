import { render, cleanup, act } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { MockedProvider } from '@apollo/client/testing';
import {
  SinglePageChatacters,
  EmptyListWithError,
  DoublePageCharacters,
  mockMatchMedia
} from '../../__mocks__';

import HeroList from './HeroList';

beforeAll(() => mockMatchMedia());
afterEach(cleanup);

const wait = async (time: number) =>
  await act(() => new Promise((resolve) => setTimeout(resolve, time)));

describe('<HeroList /> - unit tests', () => {
  it('should display correct data - snapshot', async () => {
    const { container } = render(
      <MockedProvider mocks={[SinglePageChatacters]} addTypename={false}>
        <HeroList />
      </MockedProvider>
    );

    await wait(0);

    expect(container).toMatchSnapshot();
  });

  it('should display correct data - implementation detail', async () => {
    render(
      <MockedProvider mocks={[SinglePageChatacters, DoublePageCharacters]} addTypename={false}>
        <HeroList />
      </MockedProvider>
    );

    await wait(0);

    expect((await screen.findAllByRole('row')).at(1).childElementCount).toEqual(20);
  });

  it('should display error on empty list when querying hero by name', async () => {
    render(
      <MockedProvider mocks={[EmptyListWithError]} addTypename={false}>
        <HeroList />
      </MockedProvider>
    );

    await wait(0);

    expect(screen.getByTestId('error-container')).toBeTruthy();
  });

  it('should hide loader once data has finished loading', async () => {
    render(
      <MockedProvider mocks={[EmptyListWithError]} addTypename={false}>
        <HeroList />
      </MockedProvider>
    );

    await wait(0);

    expect(() => screen.getByTestId('loader')).toThrow();
  });
});
