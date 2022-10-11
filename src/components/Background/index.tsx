// @ts-check

import React from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import {Engine} from 'tsparticles-engine';
import options from './options.json';

export default function Background(): JSX.Element {
  const init = async (main: Engine) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" init={init} options={options} />;
}
