import { Assessment } from './assessment';

describe('Assessment', () => {
  it('should create an instance', () => {
    expect(new Assessment(0, false, false, false)).toBeTruthy();
  });
});
