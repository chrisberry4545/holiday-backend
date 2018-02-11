export const LOGGER = {
  log: (...message: string[]) => {
    // tslint:disable-next-line
    console.log(message.join(' '));
  },
};
