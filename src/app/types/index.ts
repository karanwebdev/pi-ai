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

export enum Role {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
}

export interface Message {
  role: Role;
  content: string;
  blocks?: Block[];
  title?: string;
  image?: string;
  references?: Reference[];
  relatedTiles?: string[];
}