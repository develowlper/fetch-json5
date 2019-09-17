import { fetchJson5, tryFetchJson5 } from '../src';
import JSON5 from 'json5';

test('fetch json', async () => {
  fetch.mockResponseOnce(JSON5.stringify({ test: 'test' }));
  await fetchJson5('test.json5');
});

test('try fetch json', async () => {
  fetch.mockResponseOnce('HELLO');
  const res = await tryFetchJson5('test.json5');
  expect(res).toEqual({});
});
