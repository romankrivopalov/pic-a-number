import './index.css';

import * as all from '../utils/constants.js';

import Container from '../components/Container.js';
import Start from '../components/Start.js';
import Gameplay from '../components/Gameplay.js';
import Count from '../components/Count.js';

const container = new Container(all.containerSetting);
const count = new Count(all.countSetting);
const gameplay = new Gameplay(
  all.gameplaySetting,
  container.handleLiftDown,
  count.setCount,
  count.resetCount,
)
const start = new Start(
  all.startSetting,
  container.handleLiftUp,
  gameplay.handlePickNumber,
);

start.setEnentListeners();
gameplay.setEnentListeners();
