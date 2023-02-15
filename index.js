/*----------------------------------------------------------------------------------------------------------------
*
*  -------------- this file uses the following npm packages -------------------------------
* 1. moment.js
* 2. simple-git.js
* 3. random.js


-------------------------------STEPS------------------------------------------
* 1. do an npm init - this installs the node js files needed
* 2. do a npm install jsonfile -
* 3. do a npm install for moment, simple-git and random.
----------------------------------------------------------------------------------------------------------------*/

const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const random = require("random");
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(40, 50);
  const y = random.int(0, 6);
  // const x = 4;
  // const y =4;
  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
  const data = { date: DATE };
  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n))
      .push();
  });
};
makeCommit(200);
