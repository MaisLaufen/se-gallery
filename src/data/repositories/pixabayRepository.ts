import axios from 'axios';
import Config from 'react-native-config';
import { ImageResponse } from '../types/ImageResponse';
import { ImageModel } from '../../domain/models/image';

const api = axios.create({
  baseURL: Config.API_URL,
});

export const PixabayRepository = {
  async fetchPopularImages(limit = 12, page = 1): Promise<ImageModel[]> {
    const res = await api.get<ImageResponse>('/', {
      params: {
        key: Config.API_KEY,
        per_page: limit,
        page,
        order: 'popular',
        image_type: 'photo',
      },
    });

    return res.data.hits.map((hit) => ({
      id: hit.id.toString(),
      imageUrl: hit.webformatURL,
      tags: hit.tags,
      views: hit.views,
      likes: hit.likes,
    }));
  },
};