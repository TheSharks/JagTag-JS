### Thank you for displaying interest in contributing to JagTag-JS!

For contributing, it's recommended to first clone the repository with **git clone https://github.com/TheSharks/JagTag-JS.git**.

Before you implement changes however, please consider the following.

## Contribution rules

You're free to implement changes that you believe will benefit the project in any manner, be it documentation improvements, code changes or something else. However, please consider the following before submitting a PR:

- Your code must...
  - Work as you intend it to,
  - Be formatted according to the [Standard style](https://github.com/standard/standard),
  - Pass the unit tests and have such written if necessary (See the **test** folder, more below), and
  - Be documented if it concerns the end user in some way.

- Your documentation changes must...
  - Be grammatically correct, and
  - Not add extraneous material such as screenshots.

## Testing

Make sure the development dependencies are installed. If you installed in production mode, run **npm i** again in order to get the devdeps. Then run **npm test** before you submit your PR. All tests must pass for the PR to be considered valid.

**Note:** **npm run test-dev** and **npm run test-coverage** can be used for testing with watch mode enabled.

## Documentation changes

The documentation can be updated at any time without additional dependencies. However, it is strongly advised to check your changes in a preview before submitting them.

To do so, you must install some additional dependencies. Windows users can use the provided **deps.bat** file for easy installation. Linux users can simply install the dependencies by running **python3.5 -m pip install --upgrade -r requirements.txt**. Both variants require that Python 3.5 is installed.

When the dependencies are installed, run **npm run start-docs** and browse to **http://localhost:8000** to preview your changes.
