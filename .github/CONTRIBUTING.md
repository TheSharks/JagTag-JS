### Thank you for displaying interest in contributing to JagTag-JS!

For contributing, it's recommended to first clone the repository with **`git clone https://github.com/TheSharks/JagTag-JS.git`**.

Before you implement changes however, please consider the following.

## Contribution rules

You're free to implement changes that you believe will benefit the project in any manner, be it documentation improvements, code changes or something else. However, please consider the following before submitting a PR:

- Your code must...
  - Work as you intend it to,
  - Be formatted according to the [Standard style](https://github.com/standard/standard),
  - Pass the unit tests and have such written if necessary (See the **test** folder, more below), and
  - Be documented if it concerns the end user in some way.

## Testing

Make sure the development dependencies are installed. If you installed in production mode, run **`npm i`** again in order to get the devdeps. Then run **`npm test`** before you submit your PR. All tests must pass for the PR to be considered valid.

**Note:** **`npm run test:watch`** and **`npm run test:coverage:watch`** can be used for testing with watch mode enabled.