import render from '.@testing-library/react';
import Button from './Button';

describe('button', () => {
  test('on click', async () => {
    const onClick = jest.fn();
    const utils = render(
      <Button onClick={onClick} type={'button'}>
        ok
      </Button>
    );
    const button = await utils.screen.findByRole('button');
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
