"use client"
import React, {useEffect, useState} from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';


export default function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
            const fake_stories = [...Array(20)].map((_, i) => ({
              name: faker.name.firstName(),
              username: faker.internet.userName(),
              sentence: faker.lorem.sentence(),
              avatar: faker.image.avatar(),
            }));
  setStories(fake_stories)
  }, []);
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {stories.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username}/>
      ))}
    </div>
  )
}
