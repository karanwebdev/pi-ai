export interface Block {
  type: string;
  content?: string;
  ordered?: boolean;
  items?: string[];
}

export interface Reference {
  title: string;
  icon: string;
}

export interface Tile {
  id: string;
  title: string;
  image: string;
  blocks?: Block[];
  references?: Reference[];
  relatedTiles?: string[];
}
