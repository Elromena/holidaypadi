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
  // Calabar Full Package Attractions
  {
    id: 'iita-ibadan',
    name: 'IITA Nature Experience',
    description: 'Experience a unique blend of luxury and nature at IITA\'s International House, complete with recreational activities and serene surroundings.',
    image: 'https://images.unsplash.com/photo-1587974038774-40e60a5f9669',
    type: 'full_package',
    destinationId: 'ibadan',
    price: 280000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
      ],
      amenities: [
      'Complimentary breakfast',
      'Golf course walk,
      'Swimming pool',
      'Gym facilities',
      'Tennis courts',
      'Snooker room',
      'Campus walking trails'
      ],
      activities: [
        {
          name: 'Cable Car Rides',
          description: 'Scenic cable car rides with mountain views',
          included: true,
          price: 25000
        },
        {
          name: 'Nature Walks',
          description: 'Guided walks through mountain trails',
          included: true,
          price: 15000
        },
        {
          name: 'Bird Watching',
          description: 'Early morning bird watching tours',
          included: true,
          price: 20000
        },
        {
          name: 'Paragliding',
          description: 'Tandem paragliding experiences',
          included: false,
          price: 45000
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  }
];
