import { BanksPipe } from './banks.pipe';

describe('BanksPipe', () => {
  it('create an instance', () => {
    const pipe = new BanksPipe();
    expect(pipe).toBeTruthy();
  });
});
