import React from 'react';
import { ISection } from '../../ts/interfaces';

const Section = (props: ISection): JSX.Element => {
  const getItems = (items: string[]): JSX.Element[] => {
    return items.map((item) => <li>{item}</li>);
  };

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
      return <ul>{getItems(item.value)}</ul>;
    }
  });
  return <section className="section">{items}</section>;
};

export default Section;
