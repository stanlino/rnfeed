import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

interface Feed {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  comentaries: number;
  description: string;
}

export function useFeed() {

  const [feed, setFeed] = useState<Feed[]>([]);

  function incrementFeed() {
    const newFeed = Array.from({ length: 10 }).map(() => ({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      image: faker.image.image(),
      likes: faker.datatype.number(),
      comentaries: faker.datatype.number(),
      description: faker.lorem.sentence(),
    }));

    setFeed(prevFeed => [...prevFeed, ...newFeed]);
  }

  useEffect(() => {
    incrementFeed()
  }, [])

  return { feed, incrementFeed };
}