import { useState, type ImgHTMLAttributes } from 'react';

import brokenImg from '@/assets/fajarma_broken.png';

import css from './View.module.scss';

const Image = ({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnload = () => {
    setIsLoading(false);
  };

  const handleOnError = (e: React.ChangeEvent<HTMLImageElement>) => {
    setIsLoading(false);

    const target = e.target;
    target.src = brokenImg;
    target.style.objectFit = 'contain';
    target.title = 'Failed to load image';
  };

  return (
    <div className={`${css.container} ${className}`}>
      <img {...props} onLoad={handleOnload} onError={handleOnError} />
      {isLoading && <div className={css.loader} />}
    </div>
  );
};

export default Image;
