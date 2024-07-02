import { atom, selector } from 'recoil';

// Counter state atom
export const counterState = atom<number>({
  key: 'counterState',
  default: 0,
});

// Selector to increment the counter
export const incrementCounter = selector<number>({
  key: 'incrementCounter',
  get: ({ get }) => {
    const counter = get(counterState);
    return counter;
  },
  set: ({ set, get }) => {
    const counter = get(counterState);
    set(counterState, counter + 1);
  },
});

// Selector to decrement the counter
export const decrementCounter = selector<number>({
  key: 'decrementCounter',
  get: ({ get }) => {
    const counter = get(counterState);
    return counter;
  },
  set: ({ set, get }) => {
    const counter = get(counterState);
    set(counterState, counter - 1);
  },
});
