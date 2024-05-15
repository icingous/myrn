const items = [
  {
    id: 1,
    title: "Tour 1",
    image: "pizza1.avif",
    price: 5000,
    like: true,
  },
  {
    id: 2,
    title: "Tour 2",
    isNew: false,
    image: "pizza2.avif",
    price: 4000,
    oldPrice: 5500,
    like: false,
  },
  {
    id: 3,
    title: "Tour 3",
    isNew: true,
    image: "pizza3.avif",
    price: 3875,
    like: true,
  },
  {
    id: 4,
    title: "Tour 4",
    isNew: true,
    image: "pizza4.avif",
    price: 9500,
    like: true,
  },
  {
    id: 5,
    title: "Tour 5",
    isNew: false,
    image: "pizza5.avif",
    price: 7700,
    oldPrice: 8500,
  },
  {
    id: 6,
    title: "Tour 6",
    isNew: false,
    image: "pizza6.avif",
    price: 2100,
    oldPrice: 3500,
  },
  {
    id: 7,
    title: "Tour 7",
    isNew: false,
    image: "pizza7.avif",
    price: 4000,
    oldPrice: 5500,
  },
  {
    id: 8,
    title: "Tour 8",
    isNew: true,
    image: "pizza7.avif",
    price: 11000,
  },
  {
    id: 9,
    title: "Tour 9",
    isNew: false,
    image: "pizza7.avif",
    price: 9100,
  },
  {
    id: 10,
    title: "Tour 10",
    isNew: true,
    image: "pizza7.avif",
    price: 7700,
  },
];

export const getItems = async (page) => {
  return new Promise((resolve) => {
    const data = JSON.parse(JSON.stringify(items));

    for (let j = 0; j < 5; ++j) {
      const index = 10 * page + j;

      data[j].title = `TOUR ${index}`;
      data[j].id = index;
      data[j].image = `https://picsum.photos/200.webp?random=${index}`;
    }

    setTimeout(() => resolve(data.slice(0, 5)), 3000);
  });
};

export const getItemsAsync = (page = 0) => {
  return new Promise((resolve) => {
    const data = JSON.parse(JSON.stringify(items));

    for (let j = 0; j < 10; ++j) {
      const index = 10 * page + j;

      data[j].title = `TOUR ${index}`;
      data[j].id = index;
      data[j].image = `https://picsum.photos/200.webp?random=${index}`;
    }

    setTimeout(() => resolve(data.reverse()), 3000);
  });
};
