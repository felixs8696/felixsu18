import { fadeIn, fadeInUp, fadeOutUp, fadeInDown, slideInDown } from 'react-animations';
import Radium from 'radium';

export default {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeOutUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp')
  },
  fadeInDown: {
    opacity: '0',
    animation: 'x 1s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInDownSlow: {
    opacity: '0',
    animation: 'x 1.6s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInDownDelay: {
    opacity: '0',
    animation: 'x 1s',
    animationDelay: '.65s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  slideInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInDown, 'slideInDown')
  }
}