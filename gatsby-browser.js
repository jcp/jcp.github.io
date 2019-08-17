import 'typeface-montserrat';
import 'typeface-ubuntu';
import './src/static/scss/app.scss';

// Safari / IE polyfill for gatsby-background-image
export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
  }
};
