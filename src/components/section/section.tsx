import React from 'react';
import { ISection } from '../../ts/interfaces';

const Section = (props: ISection): JSX.Element => {
  const items = props.items.map((item) => {
    if (item.type === 'header1') {
      return <h1>{item.value}</h1>;
    }

    if (item.type === 'header2') {
      return <h2>{item.value}</h2>;
    }

    if (item.type === 'paragraph') {
      return <p>{item.value}</p>;
    }

    if (item.type === 'ul') {
      return (
        <ul>
          <li>{item.value}</li>
        </ul>
      );
    }
  });
  return <section className="section">{items}</section>;
};

export default Section;
