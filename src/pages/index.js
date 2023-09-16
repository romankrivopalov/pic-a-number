import './index.css';

import * as all from '../utils/constants.js';

import Container from '../components/Container';
import Start from '../components/Start';
import Gameplay from '../components/Gameplay';

const container = new Container(all.containerSetting);
const gameplay = new Gameplay(
  all.gameplaySetting,
  container.handleLiftDown,
)
const start = new Start(
  all.startSetting,
  container.handleLiftUp,
  gameplay.handlePickNumber,
);

start.setEnentListeners();
gameplay.setEnentListeners();
