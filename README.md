# Peekalink Node.js API Client

This module is an API client for the [Peekalink][peekalink-url] service to be
used in Node.js. This module does **NOT** work in the browser.

## Usage

**Installation:**

```
npm i peekalink
```

... or:

```
yarn add peekalink
```

**Usage with CommonJS:**

```js
const { Client } = require('peekalink');
const client = new Client({ apiKey: 'your-api-key' });
```

**Usage with ES imports:**

```js
import { Client } from 'peekalink';
const client = new Client({ apiKey: 'your-api-key' });
```

## Methods

**Get link preview data:**

```js
const preview = await client.preview('https://okuna.io');
```

**Check if a link is available:**

```js
const availability = await client.isAvailable('https://ankida.agency');
```

## Contribution

The Peekalink Node.js API client library is an open-source project and any
contribution is welcome! When contributing, we kindly ask you to make sure your
changes pass linting:

```
npm run lint
```

Unit tests must always pass before submitting a PR. If you've made major changes
on the code, we also expect you to update/write unit tests and make sure they
pass. The unit tests should never interact with the real API - we have mocks for
that.

```
npm run test
```

To get test coverage reports, run the following command:

```
npm run test:cover
```

## License

The module is licensed under the MIT license.

[peekalink-url]: https://www.peekalink.io
