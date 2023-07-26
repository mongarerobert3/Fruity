// addFruitData.js
import { createFruit } from './fruitsController';

const fruitsData = [
  {
    coverImage: 'path/to/cover-image1.png',
    images: ['path/to/image1-1.png', 'path/to/image1-2.png'],
    description: 'A beautiful fruit from the alps mountains of southern carolina',
    name: 'Apple',
    variety: 'Red Delicious',
    price: 1.99,
    isOrganic: true,
    nutrients: {
      vitaminC: 'high',
      fiber: 'moderate'
    }
  },
  {
    coverImage: 'path/to/cover-image2.png',
    images: ['path/to/image2-1.png', 'path/to/image2-2.png'],
    description: 'A beautiful fruit from the alps mountains of southern carolina',
    name: 'Banana',
    variety: 'Cavendish',
    price: 0.99,
    isOrganic: true,
    nutrients: {
      vitaminC: 'high',
      fiber: 'moderate'
    }
  },
];

const addFruits = async () => {
  try {
    for (const fruitData of fruitsData) {
      const newFruitId = await createFruit(fruitData);
      if (newFruitId) {
        console.log('New fruit added with ID:', newFruitId);
      } else {
        console.log('Failed to add new fruit.');
      }
    }
  } catch (error) {
    console.error('Error adding new fruits:', error);
  }
};

addFruits();
