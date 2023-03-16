const cardsData = [
  {
    id: 1,
    title: 'Electronic Metal Bacon',
    price: 775,
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/nathalie-jolie-6-xcHVkwj0c-unsplash.jpg',
  },
  {
    id: 2,
    title: 'Intelligent Concrete Salad',
    price: 134,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/lennon-cheng-3FmDZJtF4ho-unsplash.jpg',
  },
  {
    id: 3,
    title: 'Elegant Fresh Chicken',
    price: 773,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/nathan-oakley--peWKMDCyw4-unsplash.jpg',
  },
  {
    id: 4,
    title: 'Elegant Concrete Car',
    price: 403,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/vincent-botta-J41ffLK_OSM-unsplash.jpg',
  },
  {
    id: 5,
    title: 'Oriental Plastic Salad',
    price: 219,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg',
  },
  {
    id: 6,
    title: 'Electronic Granite Tuna',
    price: 850,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/minh-pham-OtXADkUh3-I-unsplash.jpg',
  },
  {
    id: 7,
    title: 'Handmade Cotton Computer',
    price: 166,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/cesar-couto-OB2F6CsMva8-unsplash.jpg',
  },
  {
    id: 8,
    title: 'Handmade Rubber Pants',
    price: 697,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/paul-hanaoka-JUJ5osLgXpQ-unsplash.jpg',
  },
  {
    id: 9,
    title: 'Recycled Cotton Cheese',
    price: 546,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg',
  },
  {
    id: 10,
    title: 'Gorgeous Granite Pants',
    price: 263,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/martin-pechy-bpg-ngqrPc8-unsplash.jpg',
  },
  {
    id: 11,
    title: 'Licensed Metal Mouse',
    price: 457,
    description: 'The Football Is Good For Training And Recreational Purposes',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/ellen-qin-bxLhqZIp2LI-unsplash.jpg',
  },
  {
    id: 12,
    title: 'Modern Soft Keyboard',
    price: 813,
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/daniil-silantev-wLaus9bLmGQ-unsplash.jpg',
  },
  {
    id: 13,
    title: 'Small Rubber Mouse',
    price: 815,
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/mitch-moondae-zXFtsdi9dIc-unsplash.jpg',
  },
  {
    id: 14,
    title: 'Handcrafted Plastic Soap',
    price: 709,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/behnam-norouzi-phXwnWWz-BM-unsplash.jpg',
  },
  {
    id: 15,
    title: 'Intelligent Plastic Bacon',
    price: 100,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/bence-balla-schottner-vFwjD8JLP4M-unsplash.jpg',
  },
  {
    id: 16,
    title: 'Practical Soft Salad',
    price: 958,
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/eugenivy_now-1JJJIHh7-Mk-unsplash.jpg',
  },
  {
    id: 17,
    title: 'Bespoke Fresh Hat',
    price: 854,
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/halacious-Vfml26Iy4mI-unsplash.jpg',
  },
  {
    id: 18,
    title: 'Modern Plastic Shirt',
    price: 104,
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/laura-davidson-ULP07chR5EQ-unsplash.jpg',
  },
  {
    id: 0,
    title: 'Luxurious Fresh Table',
    price: 648,
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/jean-philippe-delberghe-feijc-nqWKM-unsplash.jpg',
  },
  {
    id: 19,
    title: 'Sleek Fresh Chair',
    price: 465,
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    imgSrc:
      'https://cdn.lorem.space/images/furniture/.cache/640x480/rabie-madaci-4iwG8QD17AE-unsplash.jpg',
  },
];

export default cardsData;
