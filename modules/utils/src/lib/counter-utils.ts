export function counter(): () => number {
  let count = 0;

  const calculation = () => {
    return count++;
  };

  return calculation;
}
