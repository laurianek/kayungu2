
export interface PortFolioItem {
  id: string;
  title: string;
  mainImage: string;
  otherImages: string[];
  url?: string;
  paragraphs: Paragraph[]
}

export interface Paragraph {
  title?: string;
  text: string;
}

export class FrontEndList implements Paragraph {
  title = 'Front-end';
  constructor(public list: string[], public text: string = 'Technologies used') {}
}

export class BackEndList implements Paragraph {
  title = 'Backend';
  constructor(public list: string[], public text: string = 'Technologies used') {}
}
