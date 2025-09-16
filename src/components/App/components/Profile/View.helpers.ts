export const getName = (name: string) => {
  const splitted = name.split(' ');
  return `${splitted[0]} <span>${splitted[1]}</span>`;
};
