import { Attraction } from '../types';

export const attractions: Attraction[] = [
  // Lagos Regular Attractions
  {
    id: 'lekki-conservation-centre',
    name: 'Lekki Conservation Centre',
    description: 'Experience Africa\'s longest canopy walkway and observe diverse wildlife in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    type: 'regular',
    destinationId: 'lagos',
    price: 500
  },
  {
    id: 'takwa-bay',
    name: 'Takwa Bay',
    description: 'A beautiful beach destination perfect for swimming, sunbathing, and water sports.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    type: 'regular',
    destinationId: 'lagos',
    price: 300
  },
  {
    id: 'upbeat',
    name: 'Upbeat Recreation Centre',
    description: 'Modern entertainment center featuring arcade games, bowling, and virtual reality experiences.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033',
    type: 'regular',
    destinationId: 'lagos',
    price: 1500
  },
  {
    id: 'elegushi',
    name: 'Elegushi Beach',
    description: 'Popular private beach known for its pristine shores and vibrant atmosphere.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    type: 'regular',
    destinationId: 'lagos',
    price: 200
  },
  {
    id: 'landmark',
    name: 'Landmark Beach',
    description: 'Premium beach resort with various activities and water sports facilities.',
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb',
    type: 'regular',
    destinationId: 'lagos',
    price: 500
  },
  {
    id: 'good-beach',
    name: 'The Good Beach',
    description: 'Exclusive beach club offering a serene environment and premium amenities.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    type: 'regular',
    destinationId: 'lagos',
    price: 1000
  },

  // Lagos Full Package Attractions
  {
    id: 'inagbe',
    name: 'Inagbe Grand Resort',
    description: 'Luxury island resort offering all-inclusive accommodation, activities, and dining experiences.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    type: 'full_package',
    destinationId: 'lagos',
    price: 300,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427'
      ],
      amenities: [
        'Full-service spa',
        'Private beach access',
        'Infinity pool',
        'Water sports equipment',
        'Tennis courts',
        '24/7 concierge',
        'Room service'
      ],
      activities: [
        {
          name: 'Sunset Cruise',
          description: 'Evening cruise with dinner and entertainment',
          included: true
        },
        {
          name: 'Scuba Diving',
          description: 'Guided diving experiences for all skill levels',
          included: true
        },
        {
          name: 'Cultural Tours',
          description: 'Guided tours of local attractions and markets',
          included: true
        },
        {
          name: 'Spa Treatments',
          description: 'Selection of premium spa treatments',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },

  // Abuja Regular Attractions
  {
    id: 'aso-rock',
    name: 'Aso Rock Viewpoint',
    description: 'Experience breathtaking views of Abuja from this iconic monolith that gives the presidential complex its name.',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    type: 'regular',
    destinationId: 'abuja',
    price: 5000
  },
  {
    id: 'national-mosque',
    name: 'Abuja National Mosque',
    description: 'Visit one of Africa\'s most beautiful mosques, featuring stunning Islamic architecture and peaceful gardens.',
    image: 'https://images.unsplash.com/photo-1542127306-0b4688530538',
    type: 'regular',
    destinationId: 'abuja',
    price: 2000
  },
  {
    id: 'arts-center',
    name: 'National Arts & Culture Center',
    description: 'Immerse yourself in Nigerian culture through traditional arts, crafts, and performances.',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    type: 'regular',
    destinationId: 'abuja',
    price: 3500
  },
  {
    id: 'millennium-park',
    name: 'Millennium Park',
    description: 'Explore Africa\'s largest public park, perfect for picnics and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1528569937393-ee892b976859',
    type: 'regular',
    destinationId: 'abuja',
    price: 1500
  },
  {
    id: 'jabi-lake',
    name: 'Jabi Lake Mall & Waterfront',
    description: 'Shop at Abuja\'s premium mall and enjoy waterfront dining and entertainment.',
    image: 'https://images.unsplash.com/photo-1506241537529-eefea1fbe44d',
    type: 'regular',
    destinationId: 'abuja',
    price: 8000
  },
  {
    id: 'national-park',
    name: 'National Children\'s Park and Zoo',
    description: 'Perfect for families, featuring a mini zoo, playground, and educational exhibits.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0',
    type: 'regular',
    destinationId: 'abuja',
    price: 4000
  },

  // Abuja Full Package Attractions
  {
    id: 'zuma-resort',
    name: 'Zuma Rock Resort',
    description: 'Luxury resort near the iconic Zuma Rock, offering all-inclusive accommodation, spa treatments, and cultural experiences.',
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864',
    type: 'full_package',
    destinationId: 'abuja',
    price: 280000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
        'https://images.unsplash.com/photo-1587985064135-0366536eab42'
      ],
      amenities: [
        'Mountain view rooms',
        'Infinity pool with rock views',
        'Traditional spa treatments',
        'Fitness center',
        'Cultural center',
        'Business facilities',
        'Helicopter pad'
      ],
      activities: [
        {
          name: 'Rock Climbing',
          description: 'Guided climbing experiences at Zuma Rock',
          included: true
        },
        {
          name: 'Cultural Shows',
          description: 'Evening performances of traditional music and dance',
          included: true
        },
        {
          name: 'City Tours',
          description: 'Private tours of Abuja landmarks',
          included: true
        },
        {
          name: 'Golf Sessions',
          description: 'Private golf lessons and course access',
          included: false
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },
  {
    id: 'kapital-resort',
    name: 'Kapital Klub Resort',
    description: 'Premium urban resort featuring luxury accommodation, fine dining, golf course, and exclusive access to Abuja\'s best attractions.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    type: 'full_package',
    destinationId: 'abuja',
    price: 350000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427'
      ],
      amenities: [
        'Executive lounge access',
        'Private golf course',
        'Rooftop infinity pool',
        'Fine dining restaurants',
        'Luxury spa',
        'Tennis courts',
        'Cigar lounge'
      ],
      activities: [
        {
          name: 'Golf Tournament',
          description: 'Weekly golf tournaments with prizes',
          included: true
        },
        {
          name: 'Wine Tasting',
          description: 'Curated wine tasting experiences',
          included: true
        },
        {
          name: 'City Nightlife',
          description: 'VIP access to exclusive clubs and venues',
          included: true
        },
        {
          name: 'Private Chef',
          description: 'In-room dining with private chef',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },

  // Calabar Regular Attractions
  {
    id: 'marina-resort',
    name: 'Marina Resort',
    description: 'Historical waterfront complex featuring a slave museum, amusement park, and stunning river views.',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    type: 'regular',
    destinationId: 'calabar',
    price: 5000
  },
  {
    id: 'drill-ranch',
    name: 'Drill Ranch',
    description: 'Wildlife conservation center home to endangered drill monkeys and other primates.',
    image: 'https://images.unsplash.com/photo-1544539905-b5f490754d59',
    type: 'regular',
    destinationId: 'calabar',
    price: 7500
  },
  {
    id: 'botanical-garden',
    name: 'Calabar Botanical Garden',
    description: 'Historic garden featuring exotic plants, walking trails, and peaceful surroundings.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    type: 'regular',
    destinationId: 'calabar',
    price: 2500
  },
  {
    id: 'cultural-center',
    name: 'Cultural Heritage Museum',
    description: 'Explore the rich history and culture of Cross River State through artifacts and exhibitions.',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    type: 'regular',
    destinationId: 'calabar',
    price: 3000
  },
  {
    id: 'food-tour',
    name: 'Calabar Food Tour',
    description: 'Guided tour of famous Calabar restaurants and street food spots, including cooking demonstrations.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    type: 'regular',
    destinationId: 'calabar',
    price: 15000
  },
  {
    id: 'tinapa',
    name: 'Tinapa Business Resort',
    description: 'Modern leisure complex with shopping, water parks, and entertainment facilities.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    type: 'regular',
    destinationId: 'calabar',
    price: 8000
  },

  // Calabar Full Package Attractions
  {
    id: 'mountain-resort',
    name: 'Obudu Mountain Resort',
    description: 'Luxury mountain resort featuring cable cars, stunning views, and all-inclusive accommodation with activities.',
    image: 'https://images.unsplash.com/photo-1587974038774-40e60a5f9669',
    type: 'full_package',
    destinationId: 'calabar',
    price: 280000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
      ],
      amenities: [
        'Mountain view suites',
        'Cable car access',
        'Heated pool',
        'Adventure center',
        'Wellness spa',
        'Nature trails',
        'Observation deck'
      ],
      activities: [
        {
          name: 'Cable Car Rides',
          description: 'Scenic cable car rides with mountain views',
          included: true
        },
        {
          name: 'Nature Walks',
          description: 'Guided walks through mountain trails',
          included: true
        },
        {
          name: 'Bird Watching',
          description: 'Early morning bird watching tours',
          included: true
        },
        {
          name: 'Paragliding',
          description: 'Tandem paragliding experiences',
          included: false
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },
  {
    id: 'carnival-experience',
    name: 'Ultimate Calabar Carnival Experience',
    description: 'All-inclusive package with VIP access to Calabar Carnival events, luxury accommodation, and private tours.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
    type: 'full_package',
    destinationId: 'calabar',
    price: 450000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
      ],
      amenities: [
        'VIP carnival viewing deck',
        'Private event space',
        'Costume fitting room',
        'Makeup studio',
        'Recovery spa',
        'Party lounge',
        'Carnival prep area'
      ],
      activities: [
        {
          name: 'Carnival Parade',
          description: 'VIP participation in main carnival parade',
          included: true
        },
        {
          name: 'Costume Workshop',
          description: 'Create your own carnival costume',
          included: true
        },
        {
          name: 'Dance Classes',
          description: 'Learn traditional carnival dances',
          included: true
        },
        {
          name: 'Private Party',
          description: 'Host your own carnival after-party',
          included: false
        }
      ],
      policies: {
        checkIn: '4:00 PM',
        checkOut: '1:00 PM'
      }
    }
  },

  // Jos Regular Attractions
  {
    id: 'shere-hills',
    name: 'Shere Hills',
    description: 'Stunning rock formations perfect for hiking and rock climbing, offering panoramic views of Jos.',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99',
    type: 'regular',
    destinationId: 'jos',
    price: 5000
  },
  {
    id: 'jos-wildlife-park',
    name: 'Jos Wildlife Park',
    description: 'Home to diverse wildlife including lions, elephants, and crocodiles in a natural highland setting.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0',
    type: 'regular',
    destinationId: 'jos',
    price: 3500
  },
  {
    id: 'museum-architecture',
    name: 'Jos Museum & Architecture',
    description: 'Explore traditional architecture and archaeological finds from the Nok civilization.',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    type: 'regular',
    destinationId: 'jos',
    price: 2500
  },
  {
    id: 'assop-falls',
    name: 'Assop Falls',
    description: 'Beautiful waterfall and picnic spot surrounded by lush vegetation and cool climate.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9',
    type: 'regular',
    destinationId: 'jos',
    price: 3000
  },
  {
    id: 'rayfield-resort',
    name: 'Rayfield Resort',
    description: 'Scenic resort with golf course, swimming pools, and recreational facilities.',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25',
    type: 'regular',
    destinationId: 'jos',
    price: 12000
  },
  {
    id: 'riyom-rocks',
    name: 'Riyom Rock Formation',
    description: 'Ancient rock formations with unique shapes, perfect for photography and geological interest.',
    image: 'https://images.unsplash.com/photo-1508592931388-95bc7b61033d',
    type: 'regular',
    destinationId: 'jos',
    price: 4000
  },

  // Jos Full Package Attractions
  {
    id: 'highland-resort',
    name: 'Highland Resort Experience',
    description: 'Luxury mountain resort with all-inclusive accommodation, spa treatments, and guided tours of Jos attractions.',
    image: 'https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e',
    type: 'full_package',
    destinationId: 'jos',
    price: 320000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a'
      ],
      amenities: [
        'Panoramic view rooms',
        'Highland spa',
        'Rock climbing wall',
        'Indoor pool',
        'Meditation garden',
        'Tea house',
        'Adventure gear shop'
      ],
      activities: [
        {
          name: 'Highland Trek',
          description: 'Guided treks through Jos Plateau',
          included: true
        },
        {
          name: 'Rock Climbing',
          description: 'Professional climbing instruction',
          included: true
        },
        {
          name: 'Tea Tasting',
          description: 'Sample local highland teas',
          included: true
        },
        {
          name: 'Photography Tour',
          description: 'Professional photography expedition',
          included: false
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },
  {
    id: 'tin-city-adventure',
    name: 'Tin City Adventure Package',
    description: 'Complete Jos experience including luxury stay, mining site tours, cultural experiences, and adventure activities.',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217',
    type: 'full_package',
    destinationId: 'jos',
    price: 280000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
        'https://images.unsplash.com/photo-1587985064135-0366536eab42',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304'
      ],
      amenities: [
        'Mining theme suites',
        'Museum gallery',
        'Adventure center',
        'Historical library',
        'Mining artifact display',
        'Workshop space',
        'Equipment room'
      ],
      activities: [
        {
          name: 'Mine Exploration',
          description: 'Guided tours of historic tin mines',
          included: true
        },
        {
          name: 'Artifact Workshop',
          description: 'Learn about mining history and artifacts',
          included: true
        },
        {
          name: 'Cultural Evening',
          description: 'Traditional music and storytelling',
          included: true
        },
        {
          name: 'Gem Cutting',
          description: 'Learn traditional gem cutting techniques',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },

  // Port Harcourt Regular Attractions
  {
    id: 'port-harcourt-pleasure-park',
    name: 'Port Harcourt Pleasure Park',
    description: 'Modern recreational park with rides, games, and entertainment facilities for all ages.',
    image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9',
    type: 'regular',
    destinationId: 'port-harcourt',
    price: 5000
  },
  {
    id: 'tourist-beach',
    name: 'Tourist Beach',
    description: 'Beautiful beach with golden sand, perfect for relaxation and water activities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    type: 'regular',
    destinationId: 'port-harcourt',
    price: 3000
  },
  {
    id: 'port-harcourt-mall',
    name: 'Port Harcourt Mall Experience',
    description: 'Premium shopping and entertainment complex with cinemas, restaurants, and retail stores.',
    image: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf',
    type: 'regular',
    destinationId: 'port-harcourt',
    price: 10000
  },
  {
    id: 'isaac-boro-park',
    name: 'Isaac Boro Park',
    description: 'Historic park and cultural center hosting events and showcasing local heritage.',
    image: 'https://images.unsplash.com/photo-1552083375-1447ce886485',
    type: 'regular',
    destinationId: 'port-harcourt',
    price: 2000
  },
  {
    id: 'bonny-island-tour',
    name: 'Bonny Island Day Tour',
    description: 'Explore the historic Bonny Island with its rich maritime history and natural gas facilities.',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf',
    type: 'regular',
    destinationId: 'port-harcourt',
    price: 25000
  },
  {
    id: 'port-harcourt-cultural-village',
    name: 'Cultural Village Experience',
    description: 'Immerse yourself in Rivers State culture through traditional performances, crafts, and cuisine.',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    type: 'regular',
    destinationId: 'port-harcourt',
    price: 8000
  },

  // Port Harcourt Full Package Attractions
  {
    id: 'rivers-resort',
    name: 'Rivers Resort & Golf Club',
    description: 'Luxury resort featuring golf course, spa, fine dining, and exclusive access to Port Harcourt attractions.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    type: 'full_package',
    destinationId: 'port-harcourt',
    price: 300000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427'
      ],
      amenities: [
        'Golf course view rooms',
        'Professional golf facilities',
        'Sports bar',
        'Pro shop',
        'Driving range',
        'Club house',
        'Practice green'
      ],
      activities: [
        {
          name: 'Golf Lessons',
          description: 'Private lessons with PGA pros',
          included: true
        },
        {
          name: 'Club Tournament',
          description: 'Weekly golf tournaments',
          included: true
        },
        {
          name: 'Evening Networking',
          description: 'Social events at the club house',
          included: true
        },
        {
          name: 'Custom Club Fitting',
          description: 'Professional club fitting service',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },
  {
    id: 'waterfront-experience',
    name: 'Ultimate Waterfront Experience',
    description: 'All-inclusive package with luxury accommodation, private yacht tours, and exclusive waterfront activities.',
    image: 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2',
    type: 'full_package',
    destinationId: 'port-harcourt',
    price: 450000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843',
        'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
      ],
      amenities: [
        'Waterfront suites',
        'Private marina',
        'Yacht club',
        'Water sports center',
        'Seafood restaurant',
        'Beach club',
        'Sunset lounge'
      ],
      activities: [
        {
          name: 'Yacht Cruise',
          description: 'Private yacht tours with crew',
          included: true
        },
        {
          name: 'Water Sports',
          description: 'Daily water sports activities',
          included: true
        },
        {
          name: 'Fishing Trip',
          description: 'Deep sea fishing expeditions',
          included: true
        },
        {
          name: 'Sailing Lessons',
          description: 'Private sailing instruction',
          included: false
        }
      ],
      policies: {
        checkIn: '4:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },

  // Benin City Regular Attractions
  {
    id: 'oba-palace',
    name: 'Oba\'s Palace',
    description: 'Visit the historic palace of the Oba of Benin, featuring traditional architecture and royal artifacts.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04',
    type: 'regular',
    destinationId: 'benin',
    price: 5000
  },
  {
    id: 'igun-street',
    name: 'Igun Street Bronze Casting',
    description: 'Experience the UNESCO-recognized bronze casting quarter and watch master craftsmen at work.',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    type: 'regular',
    destinationId: 'benin',
    price: 3500
  },
  {
    id: 'national-museum',
    name: 'National Museum Benin',
    description: 'Explore a vast collection of Benin Kingdom artifacts, bronzes, and historical exhibits.',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3',
    type: 'regular',
    destinationId: 'benin',
    price: 2500
  },
  {
    id: 'edo-heritage',
    name: 'Edo Heritage Center',
    description: 'Interactive cultural center showcasing Edo traditions, music, dance, and contemporary arts.',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be',
    type: 'regular',
    destinationId: 'benin',
    price: 4000
  },
  {
    id: 'benin-moat',
    name: 'Ancient Benin Moat Tour',
    description: 'Guided tour of the historic Benin Moat, once the world\'s largest man-made earthwork.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    type: 'regular',
    destinationId: 'benin',
    price: 6000
  },

  // Benin City Full Package Attractions
  {
    id: 'royal-retreat',
    name: 'Royal Retreat Experience',
    description: 'Luxury accommodation with private tours of royal sites, traditional ceremonies, and cultural performances.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    type: 'full_package',
    destinationId: 'benin',
    price: 280000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a'
      ],
      amenities: [
        'Royal theme suites',
        'Traditional spa',
        'Cultural center',
        'Art gallery',
        'Royal garden',
        'Museum wing',
        'Ceremonial court'
      ],
      activities: [
        {
          name: 'Royal Tour',
          description: 'Private tours of royal heritage sites',
          included: true
        },
        {
          name: 'Cultural Show',
          description: 'Traditional music and dance performances',
          included: true
        },
        {
          name: 'Art Workshop',
          description: 'Traditional art and craft sessions',
          included: true
        },
        {
          name: 'Private Ceremony',
          description: 'Traditional ceremony experience',
          included: false
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },
  {
    id: 'bronze-lodge',
    name: 'Bronze Lodge Resort',
    description: 'Premium resort featuring traditional architecture, spa treatments, and master bronze casting workshops.',
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864',
    type: 'full_package',
    destinationId: 'benin',
    price: 350000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427'
      ],
      amenities: [
        'Bronze gallery suites',
        'Artisan workshop',
        'Craft museum',
        'Traditional spa',
        'Art studio',
        'Exhibition space',
        'Learning center'
      ],
      activities: [
        {
          name: 'Bronze Casting',
          description: 'Learn traditional bronze casting',
          included: true
        },
        {
          name: 'Artisan Tour',
          description: 'Visit master craftsmen workshops',
          included: true
        },
        {
          name: 'Art Exhibition',
          description: 'Curated art shows and exhibitions',
          included: true
        },
        {
          name: 'Private Workshop',
          description: 'One-on-one bronze casting session',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },
  {
    id: 'edo-cultural-immersion',
    name: 'Edo Cultural Immersion',
    description: 'Complete cultural experience with luxury stay, traditional cooking classes, craft workshops, and festival access.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
    type: 'full_package',
    destinationId: 'benin',
    price: 400000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1587985064135-0366536eab42',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
      ],
      amenities: [
        'Cultural theme rooms',
        'Cooking school',
        'Craft workshop',
        'Heritage library',
        'Traditional garden',
        'Festival hall',
        'Learning kitchen'
      ],
      activities: [
        {
          name: 'Cooking Class',
          description: 'Traditional Edo cooking lessons',
          included: true
        },
        {
          name: 'Craft Workshop',
          description: 'Learn traditional crafts',
          included: true
        },
        {
          name: 'Festival Access',
          description: 'VIP access to cultural festivals',
          included: true
        },
        {
          name: 'Private Feast',
          description: 'Host a traditional feast',
          included: false
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },
  {
    id: 'heritage-resort',
    name: 'Heritage Golf Resort',
    description: 'Exclusive resort combining modern luxury with cultural heritage, featuring golf course and private museum tours.',
    image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb',
    type: 'full_package',
    destinationId: 'benin',
    price: 450000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843'
      ],
      amenities: [
        'Heritage view suites',
        'Golf course',
        'Private museum',
        'Cultural center',
        'Pro shop',
        'Heritage library',
        'Club house'
      ],
      activities: [
        {
          name: 'Golf & Heritage',
          description: 'Golf sessions with cultural insights',
          included: true
        },
        {
          name: 'Museum Tour',
          description: 'Private museum collection tours',
          included: true
        },
        {
          name: 'Cultural Golf',
          description: 'Traditional games on the course',
          included: true
        },
        {
          name: 'Night Museum',
          description: 'Private evening museum tours',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },

  // Uyo Regular Attractions
  {
    id: 'ibom-plaza',
    name: 'Ibom Plaza',
    description: 'Central entertainment hub featuring beautiful fountains, gardens, and local performances.',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be',
    type: 'regular',
    destinationId: 'uyo',
    price: 2000
  },
  {
    id: 'ibom-connection',
    name: 'Ibom Connection',
    description: 'Modern architectural marvel and city landmark with panoramic views of Uyo.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
    type: 'regular',
    destinationId: 'uyo',
    price: 3000
  },
  {
    id: 'national-museum-uyo',
    name: 'National Museum Uyo',
    description: 'Explore the rich cultural heritage of Akwa Ibom through artifacts and exhibitions.',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3',
    type: 'regular',
    destinationId: 'uyo',
    price: 2500
  },
  {
    id: 'lord-lugard-footbridge',
    name: 'Lord Lugard Footbridge',
    description: 'Historic colonial-era bridge offering scenic views and photography opportunities.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    type: 'regular',
    destinationId: 'uyo',
    price: 1500
  },
  {
    id: 'ibom-tropicana',
    name: 'Ibom Tropicana',
    description: 'Modern entertainment complex with cinema, shopping mall, and leisure facilities.',
    image: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf',
    type: 'regular',
    destinationId: 'uyo',
    price: 10000
  },
  {
    id: 'craft-village',
    name: 'Akwa Ibom Craft Village',
    description: 'Traditional crafts center showcasing local artisans and indigenous crafts.',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    type: 'regular',
    destinationId: 'uyo',
    price: 4000
  },

  // Uyo Full Package Attractions
  {
    id: 'ibom-hotel',
    name: 'Ibom Hotel & Golf Resort',
    description: 'World-class resort featuring 18-hole golf course, spa, and luxury accommodations.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    type: 'full_package',
    destinationId: 'uyo',
    price: 350000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427'
      ],
      amenities: [
        'Golf view suites',
        'Championship course',
        'Luxury spa',
        'Pro shop',
        'Tennis courts',
        'Fine dining',
        'Executive lounge'
      ],
      activities: [
        {
          name: 'Golf Package',
          description: 'Unlimited golf with cart',
          included: true
        },
        {
          name: 'Pro Lesson',
          description: 'Golf lessons with PGA pros',
          included: true
        },
        {
          name: 'Club Social',
          description: 'Evening social events',
          included: true
        },
        {
          name: 'Tournament Entry',
          description: 'Entry to premium tournaments',
          included: false
        }
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM'
      }
    }
  },
  {
    id: 'nwaniba-resort',
    name: 'Nwaniba Resort Experience',
    description: 'Riverside resort offering water sports, boat tours, and traditional cuisine experiences.',
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864',
    type: 'full_package',
    destinationId: 'uyo',
    price: 280000,
    accommodation: {
      roomImages: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
        'https://images.unsplash.com/photo-1587985064135-0366536eab42'
      ],
      amenities: [
        'River view rooms',
        'Water sports center',
        'Traditional restaurant',
        'Boat dock',
        'Fishing equipment',
        'Riverside spa',
        'BBQ area'
      ],
      activities: [
        {
          name: 'River Cruise',
          description: 'Scenic river tours',
          included: true
        },
        {
          name: 'Fishing Trip',
          description: 'Guided fishing experiences',
          included: true
        },
        {
          name: 'Cooking Class',
          description: 'Traditional cooking lessons',
          included: true
        },
        {
          name: 'Private Boat',
          description: 'Private boat rental with captain',
          included: false
        }
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  }
];