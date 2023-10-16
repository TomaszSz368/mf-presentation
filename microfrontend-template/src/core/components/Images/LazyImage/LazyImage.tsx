import { ImgHTMLAttributes, memo, useEffect, useState } from 'react';

import { ImageName } from './types';

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  imageName: ImageName;
}

export const LazyImage = memo(({ alt, imageName, ...imageProps }: LazyImageProps) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const importResult = await import(`./images/${imageName}.svg?url`);

        if (import.meta.env.PROD) {
          const imagePath = `/microfrontend/${importResult.default}`;

          setImageUrl(new URL(imagePath, import.meta.url).toString());
        } else {
          setImageUrl(importResult.default);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [imageName]);

  return <img alt={alt} src={imageUrl} {...imageProps} />;
});

LazyImage.displayName = 'Image';
