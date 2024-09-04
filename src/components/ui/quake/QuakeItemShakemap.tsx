import { LazyLoadImage } from 'react-lazy-load-image-component';

type QuakeShakeImage = { imageSource: string };

const QuakeShakeMapImage = ({ imageSource }: QuakeShakeImage) => (
  <div className="quake-item__shakemap">
    <LazyLoadImage
      alt={''}
      src={imageSource}
      loading="lazy"
      effect="blur"
      className="img-fluid quake-item__shakemap-image"
    />
  </div>
);

export default QuakeShakeMapImage;
