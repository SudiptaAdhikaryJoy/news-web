export interface simpleCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string | number | boolean;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: string | number | boolean;
  titleImage: string | number | boolean;
}
