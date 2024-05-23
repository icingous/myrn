import { makeAutoObservable, runInAction } from "mobx";
import * as api from "../../api/store";

class TourStore {
  tours = [];
  topFive = [];
  isLoading = false;
  pageCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading = (isLoading) => (this.isLoading = isLoading);
  setTours = (tours) => (this.tours = tours);
  setTopFive = (tours) => (this.topFive = tours);

  getItems = (size = 200) => {
    this.setIsLoading(true);
    try {
      runInAction(async () => {
        this.tours = await api.getPageItems(this.pageCount, size);
        this.pageCount++;

        if (this.topFive.length === 0) {
          this.setTopFive(
            this.tours
              .filter((_, i) => i < 5)
              .map((item, i) => ({ ...item, image: api.getImage(i, 800) }))
          );
        }
      });
    } finally {
      this.setIsLoading(false);
    }
  };

  getPageItems = (imageSize = 200) => {
    this.isLoading = true;

    return api
      .getPageItems(this.pageCount, imageSize)
      .then((data) => {
        runInAction(() => {
          this.pageCount++;
          this.tours = [...this.tours, ...data];
        });
      })
      .catch((e) => console.log(e.message))
      .finally(() => (this.isLoading = false));
  };

  getPageItemsReversed = (imageSize = 200) => {
    this.isLoading = true;

    return api
      .getPageItemsReversed(this.pageCount, imageSize)
      .then((data) => {
        runInAction(() => {
          this.tours = [...data, ...this.tours];
          this.pageCount++;
        });
      })
      .catch((e) => console.log(e.message))
      .finally(() => (this.isLoading = false));
  };
}

export default new TourStore();
