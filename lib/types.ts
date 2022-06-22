export interface ITestimonial {
  name: string;
  title: string;
  image: string;
  contentHtml: string;
}

export interface ISpotlight {
  id: number;
  name: string;
  position: string;
  image: string;
  achievements: string[];
  contentHtml: string;
}

export interface ISheets {
  id: number;
  name: string;
  embed: string;
}

export interface IRSVP {
  name: string;
  phone: string;
  email: string;
  date: string;
}

export interface IPhoto {
  photo: HTMLImageElement;
}
