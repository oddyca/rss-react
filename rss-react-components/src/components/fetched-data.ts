import { getAPIData } from './API/fetch';
import { TFetchedData, Patent } from '../types/types';

export default async function FetchedData() {
  const structuredData: TFetchedData[] = [];

  const data = await getAPIData();
  const parsedData = await data.json();

  parsedData['results'].map((patent: Patent) => {
    structuredData.push({
      id: patent[0] as string,
      code: patent[1] as string,
      title: patent[2] as string,
      description: patent[3] as string,
      type: patent[5] as string,
      acronym: patent[9] as string,
      img: patent[10] as string,
      number: patent[12] as number,
    });
  });

  return structuredData;
}
