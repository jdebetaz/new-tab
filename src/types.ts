export interface Link {
  name: string;
  url: string;
  svg?: string;
  furl?: string;
  icon?: string;
}

export type Folder = Link[];

export interface Bookmarks {
  [key: string]: Folder;
}
