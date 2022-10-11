// @ts-check

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  url: string;
}

export default function BrowserWindow({children, url}: Props): JSX.Element {
  return (
    <div className={styles.browserWindow}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        {url && (
          <div
            className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>
            {url}
          </div>
        )}
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>{children}</div>
    </div>
  );
}
