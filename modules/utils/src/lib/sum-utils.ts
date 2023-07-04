export function sum(value?: number) {
  let currentSum = 0;

  const calculate = (value?: number) => {
    if (value === undefined) {
      return currentSum;
    }

    currentSum += value;

    return calculate;
  };

  return calculate(value);
}
