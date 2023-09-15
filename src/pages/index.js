import './index.css';

import * as all from '../utils/constants.js';

import Container from '../components/Container';
import Start from '../components/Start';

console.log(all.containerSetting)
const container = new Container(all.containerSetting);
const start = new Start(
  all.startSetting,
  container.handleLiftUp
);

start.setEnentListeners();
