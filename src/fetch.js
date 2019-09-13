import JSON5 from 'json5';

const fetchJson5 = async path => {
  return JSON5.parse(await (await fetch(path)).text());
};

const tryFetchJson5 = async path => {
  try {
    return JSON5.parse(await (await fetch(path)).text());
  } catch (e) {
    console.warn(`Fetching ${path} caused the following error:`, e);
    console.warn("Returning '{}' as fallback.");
  }
  return {};
};

export { tryFetchJson5, fetchJson5 };
