import React from 'react';
import { IPage } from '../../ts/interfaces';
import Section from '../section/section';

const Page = (props: IPage): JSX.Element => {
  const sections = props.sections.map((section) => (
    <Section key={section.id} {...section}></Section>
  ));

  return <main className="page">{sections}</main>;
};

export default Page;
