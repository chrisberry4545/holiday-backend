export const LOGGER = {
  log: (...message: any[]) => {
    // tslint:disable-next-line
    console.log(message.join(' '));
  },
};
