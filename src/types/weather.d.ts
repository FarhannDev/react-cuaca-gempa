interface WeatherProvince {
  issue: {
    timestamp: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
  };
  areas: [
    {
      id?: string;
      latitude: string;
      longitude: string;
      coordinate: string;
      type: string;
      region: string | null;
      level: string;
      description: string;
      domain: string;
      tags: string | null;
      params: Array[{
        id: string;
        description: string;
        type: string;
        times: [
          {
            type: string;
            h: string;
            datetime: string;
            value: string;
          }
        ];
      }];
    }
  ];
}

interface WeatherCity {
  id: string;
  latitude: string;
  longitude: string;
  coordinate: string;
  type: string;
  region: string | null;
  level: string;
  description: string;
  domain: string;
  tags: string | null;
  params: Array[{
    id: string;
    description: string;
    type: string;
    times: Array[{
      type: string;
      h: string;
      datetime: string;
      value: string;
      celcius?: string;
      fahrenheit?: string;
      code?: string;
      name?: string;
    }];
  }];
}
