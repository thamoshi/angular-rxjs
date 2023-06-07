import { BookInfoPipe } from './book-info.pipe';

describe('BookTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new BookInfoPipe();
    expect(pipe).toBeTruthy();
  });
});
