# Medal Palindrome React Project

Medal React Code project using my development environment/boilerplate. Includes deploying with
netlify, linting/formatting, and documentation generation. Built using Gatsby.

## Assumptions

The prompt shows that the `oo` in `pool` should be correct, but the `civic` in `civics` is not
correct. The criteria for correct characters seems inconsistent as they are palindromic substrings.
Therefore I use the [Manacher's
Algorithm](https://en.wikipedia.org/wiki/Longest_palindromic_substring) to determine the largest
correct palindromic substring and mark that substring as correct.

See it live on netlify: https://medal-palindrome.netlify.com

## 🚀 Quick start

1.  **Clone the repository.**


    ```sh
    git clone https://github.com/engyn/medal-palindrome
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd medal-palindrome
    yarn
    yarn start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## Overview

```text
medal-palindrome
│
└───internals
│   │   jest setup and mockups
│   │
│   └───mocks
│       │   test mocks
│
└───src
│   │
│   └───components
│   │   │   app components
│   │
│   └───config
│   │   │   configuration files
│   │
│   └───pages
│   │   │   pages/containers
│   │
│   └───utils
│       │   utilities functions
```

## 📖 Documentation

1.  **Start the documentation server.**

    Navigate into your new site’s directory and start the documentation server.

    ```sh
    yarn docs
    ```

1.  **Open the documentation page.**

    Navigate to `https://localhost:6060`

## 🧪 Testing

Run tests with `yarn test`

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/engyn/medal-palindrome)

To deploy to netlify via command line, install the `netlify-cli` and run `yarn deploy`.
