import { variable1, variable2 } from './foo.js';
import { variable3, variable4 } from './foo2.js';

export default () => {
  console.log(`${variable1}, ${variable2}`);
  console.log(`${variable3}, ${variable4}`);
};