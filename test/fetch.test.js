import { fetchJson5 } from '../src';

test('fetch json', async () => {
  const res = await fetchJson5('test.json5');
  console.log('TCL: res', res);
});
