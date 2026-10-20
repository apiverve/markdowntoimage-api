Markdown to Image API
============

Markdown to Image converts markdown text into visual image representations, rendering content as PNG, JPEG, or WebP images.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-markdowntoimage.svg)](https://pypi.org/project/apiverve-markdowntoimage/)

This is a Python wrapper for the [Markdown to Image API](https://apiverve.com/marketplace/markdowntoimage?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-markdowntoimage
```

Using `pip3`:

```bash
pip3 install apiverve-markdowntoimage
```

---

## Configuration

Before using the Markdown to Image API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient

# Initialize the client with your APIVerve API key
api = MarkdowntoimageAPIClient("[YOUR_API_KEY]")

query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Markdown to Image API documentation is found here: [https://docs.apiverve.com/ref/markdowntoimage](https://docs.apiverve.com/ref/markdowntoimage?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient

# Initialize the client with your APIVerve API key
api = MarkdowntoimageAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `MarkdowntoimageAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient, MarkdowntoimageAPIClientError

api = MarkdowntoimageAPIClient("[YOUR_API_KEY]")

query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except MarkdowntoimageAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient, MarkdowntoimageAPIClientError

api = MarkdowntoimageAPIClient("[YOUR_API_KEY]")

query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except MarkdowntoimageAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient, MarkdowntoimageAPIClientError

query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}

# Using context manager ensures proper cleanup
with MarkdowntoimageAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except MarkdowntoimageAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient

# Enable debug mode
api = MarkdowntoimageAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_markdowntoimage.apiClient import MarkdowntoimageAPIClient

api = MarkdowntoimageAPIClient("[YOUR_API_KEY]")

query = {
    "markdown": "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
    "width": 1280,
    "height": 800,
    "format": "png"
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
