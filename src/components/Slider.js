import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: require('../img/1.jpg'),
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header'
    },
    {
      src: require('../img/2.jpg'),
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header'
    },
    {
      src: require('../img/3.jpg'),
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    },
    {
        src: require('../img/4.jpg'),
        altText: 'Slide 4',
        caption: 'Slide 4',
        header: 'Slide 4 Header'
      }
  ];

  const SliderC = () => <UncontrolledCarousel  items={items} />;

export default SliderC;