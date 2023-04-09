export const getAPIAbort = new AbortController();
export const getAPISearchAbort = new AbortController();

export async function getAPIData() {
  const getAPIAbort = new AbortController();
  return fetch(
    'https://api.nasa.gov/techtransfer/patent/?a&api_key=ZyKQJPkhglFioX1mKCVE5Z6b7c7VBcK2iZtc4Y9E',
    {
      method: 'GET',
      signal: getAPIAbort.signal,
    }
  );
}

export async function searchAPIData(input: string) {
  return fetch(
    `https://api.nasa.gov/techtransfer/patent/?${input}&api_key=ZyKQJPkhglFioX1mKCVE5Z6b7c7VBcK2iZtc4Y9E`,
    {
      method: 'GET',
      signal: getAPISearchAbort.signal,
    }
  );
}
