export type Project = {
  title: string;
  description: string;
  subtitle: string;
  overview: string;
  features: string[];
  tags: string[];
  buttons: {
    github: {
      text: string;
      link: string;
    };
    website: {
      text: string;
      link: string;
    };
  };
  media: {
    urls: string[];
    descriptions: string[];
  };
};