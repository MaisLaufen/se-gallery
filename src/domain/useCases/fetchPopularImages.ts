import { PixabayRepository } from '../../data/repositories/pixabayRepository';
import { Image } from '../models/image';

export const fetchPopularImages = async (): Promise<Image[]> => {
  return await PixabayRepository.fetchPopularImages();
};