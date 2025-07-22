import { makeAutoObservable, runInAction } from 'mobx';
import { fetchFilteredImages } from '../../domain/useCases/fetchImages';
import { ImageModel } from '../../domain/models/image';

const IMAGES_PER_PAGE = 30;

export class MainStore {
  images: ImageModel[] = [];
  currentPage = 1;
  query = '';
  selectedColors: string[] = [];
  sortOrder: 'popular' | 'latest' = 'popular';
  filterVisible = false;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setQuery = (q: string) => {
    this.query = q;
  };

  setFilterVisible = (visible: boolean) => {
    this.filterVisible = visible;
  };

  toggleColor = (color: string) => {
    this.currentPage = 1;
    if (this.selectedColors.includes(color)) {
      this.selectedColors = this.selectedColors.filter((c) => c !== color);
    } else {
      this.selectedColors = [...this.selectedColors, color];
    }
    this.loadImages(true);
  };

  toggleSortOrder = () => {
    this.currentPage = 1;
    this.sortOrder = this.sortOrder === 'popular' ? 'latest' : 'popular';
    this.loadImages(true);
  };

  setPage = (page: number) => {
    this.currentPage = page;
    this.loadImages(true);
  };

  onSearchSubmit = () => {
    this.currentPage = 1;
    this.loadImages(true);
  };

  async loadImages(reset = false) {
    if (this.loading) return;
    this.loading = true;

    try {
      const newImages = await fetchFilteredImages({
        query: this.query,
        colors: this.selectedColors,
        order: this.sortOrder,
        page: this.currentPage,
        limit: IMAGES_PER_PAGE,
      });

      runInAction(() => {
        this.images = reset ? newImages : [...this.images, ...newImages];
        this.error = null;
      });
    } catch (e: any) {
      runInAction(() => {
        this.error =
          e.message === 'Network Error'
            ? 'Кажется, у вас нет интернета или сервис недоступен в вашей стране. Если так, воспользуйтесь VPN.'
            : `Произошла неизвестная ошибка: ${e.message}`;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  closeError = () => {
    this.error = null;
  };
}

export const mainStore = new MainStore();