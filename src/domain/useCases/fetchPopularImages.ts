import { PixabayRepository } from '../../data/repositories/pixabayRepository';
import { ImageModel } from '../models/image';

export const fetchPopularImages = (page: number = 1, limit: number = 12) => {
  return PixabayRepository.fetchPopularImages(limit, page);
};