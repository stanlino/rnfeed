import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

import { IPost } from '../dtos/post';

export function useFeed() {

  const [feed, setFeed] = useState<IPost[]>([]);

  function loadPosts() {
    const newFeed = Array.from({ length: 10 }).map(() => ({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.image(),
      likes: faker.datatype.number({
        min: 0,
        max: 1000,
      }),
      comentaries: faker.datatype.number({
        min: 0,
        max: 1000,
      }),
      description: faker.lorem.sentence(),
    }));

    setFeed(prevFeed => [...prevFeed, ...newFeed]);
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return { feed, loadPosts };
}