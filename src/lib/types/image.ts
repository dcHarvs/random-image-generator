export type ImageType = {
  id: string;
  imageSrc: string;
};

export type ImageResponseType = {
  data?: ImageType;
  error?: string;
};
