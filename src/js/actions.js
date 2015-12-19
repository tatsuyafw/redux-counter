export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export function increment() {
  return {
    type: INCREMENT_COUNT
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNT
  };
}
