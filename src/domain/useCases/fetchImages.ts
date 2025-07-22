import { PixabayRepository } from '../../data/repositories/pixabayRepository';
import { ImageModel } from '../models/image';

export const fetchPopularImages = (page: number = 1, limit: number = 30): Promise<ImageModel[]> => {
  return PixabayRepository.fetchPopularImages(limit, page);
};

export interface SearchFilters {
  query?: string;
  colors?: string[];
  order?: 'popular' | 'latest';
  page?: number;
  limit?: number;
}

export const fetchFilteredImages = (filters: SearchFilters = {}): Promise<ImageModel[]> => {
  return PixabayRepository.fetchImages({
    q: filters.query,
    colors: filters.colors,
    order: filters.order,
    page: filters.page,
    limit: filters.limit,
  });
};