# Markdown to Image API

Markdown to Image converts markdown text into visual image representations, rendering content as PNG, JPEG, or WebP images.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)
[![npm version](https://img.shields.io/npm/v/@apiverve/markdowntoimage.svg)](https://www.npmjs.com/package/@apiverve/markdowntoimage)

This is a Javascript Wrapper for the [Markdown to Image API](https://markdowntoimage.apiverve.com?utm_source=npm&utm_medium=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/markdowntoimage
```

Using yarn:
```shell
yarn add @apiverve/markdowntoimage
```

---

## Configuration

Before using the Markdown to Image API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=readme)

The Markdown to Image API documentation is found here: [https://docs.apiverve.com/ref/markdowntoimage](https://docs.apiverve.com/ref/markdowntoimage?utm_source=npm&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const markdowntoimageAPI = require('@apiverve/markdowntoimage');
const api = new markdowntoimageAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  "markdown": "# Sample Markdown Document\n\nThis is a **sample** markdown document that will be converted to an image.\n\n## Features\n\n- Supports headers\n- Supports **bold** and *italic* text\n- Supports lists\n\n## Example\n\nThis markdown will be rendered as a visual image with customizable dimensions.",
  "width": 1280,
  "height": 800,
  "format": "png"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  "markdown": "# Sample Markdown Document\n\nThis is a **sample** markdown document that will be converted to an image.\n\n## Features\n\n- Supports headers\n- Supports **bold** and *italic* text\n- Supports lists\n\n## Example\n\nThis markdown will be rendered as a visual image with customizable dimensions.",
  "width": 1280,
  "height": 800,
  "format": "png"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  "markdown": "# Sample Markdown Document\n\nThis is a **sample** markdown document that will be converted to an image.\n\n## Features\n\n- Supports headers\n- Supports **bold** and *italic* text\n- Supports lists\n\n## Example\n\nThis markdown will be rendered as a visual image with customizable dimensions.",
  "width": 1280,
  "height": 800,
  "format": "png"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "imageName": "31e86a48-125a-464a-8ea5-8b342226944f.png",
    "format": ".png",
    "downloadURL": "https://storage.googleapis.com/apiverve/APIData/markdowntoimage/31e86a48-125a-464a-8ea5-8b342226944f.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1766010365&Signature=PXD9Zct7HearzSJvxZcNlnlnPdga8qH1Mln4I7tTDmrzSolUdwDxZx3Xdsy6LVu8B%2F1es7keTFKcnNnBm2Er9Kqbmg5j9BeTX3lQnJsIVh5gAlsEheT%2B%2FpWjWnjRWc%2FdtqurbUR%2BcSYMELqufs%2FPcrK62OAl0lmf6zARA2KtUP8qop%2FORbG81h%2BkFIoy3VaaRVXiceewF6HQzBz%2FFBhmc1oOAiEPiQZl7PQRu%2Fz4oX%2BtMbnWPUoUmIXVVfDmMw4XsyWlckQo%2BfZ34B79aOaBznpuJ0Z%2BlN1upsHPvBO33WRdQHECEUMJmGB7KgRZU%2Bjqco4LSEOO9kfkLlMxYyl3pQ%3D%3D",
    "expires": 1766010365188,
    "markdownLength": 282,
    "htmlLength": 376,
    "dimensions": {
      "width": 1280,
      "height": 800
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=npm&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
