import { Attraction } from '../types';

export const attractions: Attraction[] = [
  // Ibadan Regular Attractions
{
id: 'horse-riding',
name: 'Go Horse Riding in Nature',
description: 'Enjoy a peaceful ride through nature trails as you connect with these magnificent animals.',
image: 'https://pbs.twimg.com/media/EsmHH_XXUAAqHje?format=jpg&name=4096x4096',
type: 'regular',
destinationId: 'ibadan',
price: 2000
},
{
id: 'paintball',
name: 'Action-Packed Paintball',
description: 'Beat the opposing team in this tactical paintball arena and come out victorious.',
image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/2f/f1/ready-for-some-paintball.jpg?w=900&h=500&s=1',
type: 'regular',
destinationId: 'ibadan',
price: 5000
},
{
id: 'archery',
name: 'Fun Archery Session',
description: 'Test your aiming skills with 12 arrows and unleash your inner hunting spirits.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4fSHhCX0X4QHZl3JKXKgFZFzyrQShqtCcA&s',
type: 'regular',
destinationId: 'ibadan',
price: 3500
},
{
id: 'go-karting',
name: 'Go-Karting Arena',
description: 'Ready your helmet and accelerate down this driving course as you race against time and other opponents to see who reaches the finish line first.',
image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
type: 'regular',
destinationId: 'ibadan',
price: 10000
},
{
id: 'agodi-water-park',
name: 'Family Water Park',
description: 'Splash, slide and swim in this exciting water park perfect for hot days.',
image: 'https://articles.connectnigeria.com/wp-content/uploads/2021/06/Agodi-Gardens-Ibadan-visitnigerianow-1-1-670x440-1.jpg',
type: 'regular',
destinationId: 'ibadan',
price: 2500
},
{
id: 'obstacle-course',
name: 'Obstacle Course (Gauntlet)',
description: 'Test your stamina on this thrilling obstacle course that\'s designed to test your limits and keep your adrenaline pumping.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYQ8E1ofYPBNU_p8VX7HQOA_UA-JQCFL1SQ&s',
type: 'regular',
destinationId: 'ibadan',
price: 20000
},
{
id: 'bowers-tower',
name: 'Visit the Bowers Tower',
description: 'Climb this historic 60-foot tower for breathtaking views of Ibadan and fascinating stories of the building\'s past.',
image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/The_Iconic_Bowers_Tower_Monument_-_Layipo%2C_Ibadan%2C_Nigeria._02.jpg',
type: 'regular',
destinationId: 'ibadan',
price: 2000
},
{
id: 'boat-cruise',
name: 'Relaxing Boat Cruise',
description: 'Go on a relaxing boat ride and soak up the cool wind as you ride along the Eleyele waterfront.',
image: 'https://pbs.twimg.com/media/GA94N8xW4AACDpF?format=jpg&name=large',
type: 'regular',
destinationId: 'ibadan',
price: 8000
},
{
id: 'kayaking',
name: 'Leisure Kayaking',
description: 'Enjoy 30 minutes of leisure kayaking along the Eleyele waterfront.',
image: 'https://helloib.com/wp-content/uploads/2024/01/IMG_3380-scaled.jpeg',
type: 'regular',
destinationId: 'ibadan',
price: 6000
},
  // Ibadan Full Package Attractions
  {
    id: 'iita-ibadan',
    name: 'IITA Nature Experience',
    description: 'Experience a unique blend of luxury and nature at IITA\'s International House, complete with recreational activities and serene surroundings.',
    image: 'https://hospitality.iita.org/wp-content/uploads/2024/03/PENISULA-2048x1365.jpg',
    type: 'full_package',
    destinationId: 'ibadan',
    price: 150000,
    accommodation: {
      roomImages: [
        'https://nwaanyiije.com/wp-content/uploads/2022/01/E2B79A5F-8097-4373-8B9D-D8D8079D6974-768x432.jpeg',
        'https://hospitality.iita.org/wp-content/uploads/2019/06/IMG_7880-scaled.jpeg',
        'https://hospitality.iita.org/wp-content/uploads/elementor/thumbs/DSC_8440-q98c1xodar2tfttmfucswux6iceb3u37qtnsgj3sm8.jpg'
      ],
      amenities: [
      'Complimentary breakfast',
      'Golf course walk',
      'Swimming pool',
      'Gym facilities',
      'Tennis courts',
      'Snooker room',
      'Campus walking trails'
      ],
      activities: [
      {
name: 'Cycling',
description: 'Explore the beautiful campus grounds on a bicycle',
included: true,
price: 6000
},
{
name: 'Forest Walk',
description: 'Guided nature walk through scenic forest paths',
included: true,
price: 8000
},
{
name: 'Fishing',
description: 'Peaceful fishing experience with equipment provided',
included: true,
price: 10000
},
{
name: 'Bird Watching',
description: 'Observe diverse bird species in their natural habitat',
included: true,
price: 10000
},
{
name: 'Gym Session',
description: 'Access to fully equipped modern gym facilities',
included: true,
price: 5000
},
{
name: 'Group Aerobics',
description: 'Join energetic group fitness sessions',
included: false,
price: 0
},
{
name: 'In-Room Massage',
description: 'Relaxing massage service in your room',
included: false,
price: 0
},
{
name: 'Camping',
description: 'Overnight camping experience in designated areas',
included: false,
price: 0
},
{
name: 'Golf Lesson',
description: 'Professional golf instruction for 9 holes',
included: false,
price: 0
}
],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  }

  // add new data before this and always add a comma immediately after the last closed bracket before adding new data
];
