const items = [
  {
    id: 1,
    title: "Tour 1",
    image: "",
    price: 5000,
    like: true,
  },
  {
    id: 2,
    title: "Tour 2",
    isNew: false,
    image: "",
    price: 4000,
    oldPrice: 5500,
    like: false,
  },
  {
    id: 3,
    title: "Tour 3",
    isNew: true,
    image: "",
    price: 3875,
    like: true,
  },
  {
    id: 4,
    title: "Tour 4",
    isNew: true,
    image: "",
    price: 9500,
    like: true,
  },
  {
    id: 5,
    title: "Tour 5",
    isNew: false,
    image: "",
    price: 7700,
    oldPrice: 8500,
  },
  {
    id: 6,
    title: "Tour 6",
    isNew: false,
    image: "",
    price: 2100,
    oldPrice: 3500,
  },
  {
    id: 7,
    title: "Tour 7",
    isNew: false,
    image: "",
    price: 4000,
    oldPrice: 5500,
  },
  {
    id: 8,
    title: "Tour 8",
    isNew: true,
    image: "",
    price: 11000,
  },
  {
    id: 9,
    title: "Tour 9",
    isNew: false,
    image: "",
    price: 9100,
  },
  {
    id: 10,
    title: "Tour 10",
    isNew: true,
    image: "",
    price: 7700,
  },
];

export const getImage = (index, size = 200) =>
  `https://picsum.photos/${size}.webp?random=${index}`;

export const getItems = (size = 200) =>
  items.map((item, i) => ({ ...item, image: getImage(i, size) }));

export const getPageItems = async (page, imageSize = 200) => {
  return new Promise((resolve) => {
    const data = JSON.parse(JSON.stringify(items));

    for (let j = 0; j < 10; ++j) {
      const index = 10 * page + j;

      data[j].title = `TOUR ${index}`;
      data[j].id = index;
      data[j].image = `https://picsum.photos/${imageSize}.webp?random=${index}`;
    }

    setTimeout(() => resolve(data), 3000);
  });
};

export const getChunkItems = async (page, imageSize = 200) => {
  return new Promise((resolve) => {
    const data = JSON.parse(JSON.stringify(items));

    for (let j = 0; j < 5; ++j) {
      const index = 10 * page + j;

      data[j].title = `TOUR ${index}`;
      data[j].id = index;
      data[j].image = `https://picsum.photos/${imageSize}.webp?random=${index}`;
    }

    setTimeout(() => resolve(data.slice(0, 5)), 3000);
  });
};

export const getPageItemsReversed = (page = 0, imageSize = 200) => {
  return getPageItems(page, imageSize).then((data) => data.reverse());
};
