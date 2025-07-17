import axios from 'axios';
import Config from 'react-native-config';
import { ImageResponse } from '../types/ImageResponse';
import { Image } from '../../domain/models/image';

const api = axios.create({
  baseURL: Config.API_URL,
});

export const PixabayRepository = {
  async fetchPopularImages(limit: number = 12): Promise<Image[]> {
    console.log('Fetching popular images...');
    console.log('API_KEY:', Config.API_KEY);
    console.log('API_URL:', Config.API_URL);

    const res = await api.get<ImageResponse>('/', {
      params: {
        key: Config.API_KEY,
        per_page: limit,
        order: 'popular',
        image_type: 'photo',
      },
    });

    return res.data.hits.map((hit) => {
      const mapped = {
        id: hit.id.toString(),
        imageUrl: hit.webformatURL,
        tags: hit.tags,
        views: hit.views,
        likes: hit.likes,
      };

      console.log('Hit:', mapped); // TODO: delete this in prod

      return mapped;
    });
  },
};