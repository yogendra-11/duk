const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  slider: [
    {
      url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80',
      filename: 'slide1.jpg',
      description: 'E-commerce shopping banner'
    },
    {
      url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80',
      filename: 'slide2.jpg',
      description: 'New arrivals collection'
    },
    {
      url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80',
      filename: 'slide3.jpg',
      description: 'Special offers banner'
    }
  ],
  categories: [
    {
      url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
      filename: 'electronics.jpg',
      description: 'Electronics category'
    },
    {
      url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      filename: 'fashion.jpg',
      description: 'Fashion category'
    },
    {
      url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      filename: 'home.jpg',
      description: 'Home & Living category'
    },
    {
      url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      filename: 'books.jpg',
      description: 'Books category'
    }
  ]
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const createDirectories = () => {
  const dirs = [
    'public/images/slider',
    'public/images/categories'
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const downloadAllImages = async () => {
  createDirectories();

  for (const [category, items] of Object.entries(images)) {
    console.log(`Downloading ${category} images...`);
    for (const item of items) {
      const filepath = path.join('public', 'images', category, item.filename);
      try {
        await downloadImage(item.url, filepath);
        console.log(`Downloaded: ${item.filename}`);
      } catch (error) {
        console.error(`Error downloading ${item.filename}:`, error.message);
      }
    }
  }
};

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch(error => {
  console.error('Error downloading images:', error);
}); 