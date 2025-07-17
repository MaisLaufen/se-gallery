export interface ImageResponse {
  hits: {
    id: number;
    webformatURL: string;
    tags: string;
    likes: number;
    views: number;
  }[];
}