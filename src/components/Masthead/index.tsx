// @ts-check

import React from 'react';
import clsx from 'clsx';
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.scss';

export default function Masthead({
  avatar,
  title,
  tagline,
  url,
  code,
}): JSX.Element {
  return (
    <section className={clsx(styles.masthead)}>
      <div className="avatar avatar--vertical margin-bottom--lg">
        <img className="avatar__photo avatar__photo--xl" src={avatar} />
      </div>

      <h1>{title}</h1>
      <p>{tagline}</p>

      <BrowserWindow url={url}>
        <CodeBlock className="mdx-code-block">{code}</CodeBlock>
      </BrowserWindow>
    </section>
  );
}
