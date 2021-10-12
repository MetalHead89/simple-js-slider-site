import React from 'react';
import { ISection } from '../../ts/interfaces';

const Section = (props: ISection): JSX.Element => {
  const items = props.items.map((item) => {
    if (item.type === 'header1') {
      return <h1>{item.value}</h1>;
    }
    if (item.type === 'paragraph') {
      return <p>{item.value}</p>;
    }
  });
  return <section className="section">{items}</section>;
};

export default Section;
