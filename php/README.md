# Markdown to Image API - PHP Package

Markdown to Image converts markdown text into visual image representations, rendering content as PNG, JPEG, or WebP images.

## Installation

Install via Composer:

```bash
composer require apiverve/markdowntoimage
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Markdowntoimage\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'markdown' => '# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.',
    'width' => 1280,
    'height' => 800,
    'format' => 'png'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Markdowntoimage\Client;
use APIVerve\Markdowntoimage\Exceptions\APIException;
use APIVerve\Markdowntoimage\Exceptions\ValidationException;

try {
    $response = $client->execute(['markdown' => '# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.', 'width' => 1280, 'height' => 800, 'format' => 'png']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/markdowntoimage?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://markdowntoimage.apiverve.com?utm_source=php&utm_medium=readme](https://markdowntoimage.apiverve.com?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
