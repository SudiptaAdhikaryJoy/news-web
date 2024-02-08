export interface simpleCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string | number | boolean;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: string | number | boolean;
}
