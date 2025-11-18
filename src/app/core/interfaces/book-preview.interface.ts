export interface BookPreview {
  id: string;
  image: string;
  title: string;
  chapters: number;
  lastUpdate: string;
  statistics: {
    views: number;
    stars: number;
    comments: number;
  };
}
