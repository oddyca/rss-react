export async function getAPIData() {
  return fetch(
    'https://api.nasa.gov/techtransfer/patent/?engine&api_key=ZyKQJPkhglFioX1mKCVE5Z6b7c7VBcK2iZtc4Y9E',
    {
      method: 'GET',
    }
  );
}

export async function searchAPIData(input: string) {}
