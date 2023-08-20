import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface HeaderOptionsInterface {
  name: string;
  linkTo: string;
}

export interface FooterLinksInterface{
  category: string;
  links: Array<{
    title: string;
    href: string;
  }>
}

export interface Product{
  _id: string,
  title: string,
  subTitle: string,
  price: string,
  quantity: number,
  size: string,
  images: [any],
  stripePriceAPIID: string,
}
export interface ProductInCart{
  productID: string,
  firstImage: string,
  title: string,
  subTitle: string,
  size: string,
  quantity: string,
  price: number,
  originalPrice: number,
  stripePriceAPIID: string,
}


export interface Config  {
  baseUrl: string,
  projectId: string | undefined,
  dataset: string | undefined,
}

export type ImageUrlBuilder = (config: {
  projectId: string;
  dataset?: string;
  baseUrl?: string;
}) => {
  image: (source: SanityImageSource) => string;
};