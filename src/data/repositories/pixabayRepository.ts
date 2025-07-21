import axios from 'axios';
import Config from 'react-native-config';
import { ImageResponse } from '../types/ImageResponse';
import { ImageModel } from '../../domain/models/image';

const api = axios.create({
  baseURL: Config.API_URL,
});

interface FetchImagesParams {
  limit?: number;
  page?: number;
  q?: string;
  colors?: string[]; // ['red', 'yellow', etc]
  order?: 'popular' | 'latest';
}

export const PixabayRepository = {
  async fetchImages(params: FetchImagesParams = {}): Promise<ImageModel[]> {
    const {
      limit = 30,
      page = 1,
      q,
      colors,
      order = 'popular',
    } = params;

    const response = await api.get<ImageResponse>('/', {
      params: {
        key: Config.API_KEY,
        per_page: limit,
        page: page,
        order: order,
        q: q || '',
        colors: colors?.join(','),
        image_type: 'photo',
      },
    });

    return response.data.hits.map((hit) => ({
      id: hit.id.toString(),
      imageUrl: hit.webformatURL,
      tags: hit.tags,
      views: hit.views,
      likes: hit.likes,
    }));
  },

  async fetchPopularImages(limit = 30, page = 1): Promise<ImageModel[]> {
    return this.fetchImages({ limit, page, order: 'popular' });
  },
};