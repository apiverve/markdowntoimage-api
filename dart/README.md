# Markdown to Image API - Dart/Flutter Client

Markdown to Image converts markdown text into visual image representations, rendering content as PNG, JPEG, or WebP images.

[![pub package](https://img.shields.io/pub/v/apiverve_markdowntoimage.svg)](https://pub.dev/packages/apiverve_markdowntoimage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Markdown to Image API](https://apiverve.com/marketplace/markdowntoimage?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_markdowntoimage: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_markdowntoimage/apiverve_markdowntoimage.dart';

void main() async {
  final client = MarkdowntoimageClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'markdown': '# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.',
      'width': 1280,
      'height': 800,
      'format': 'png'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Markdown to Image API](https://apiverve.com/marketplace/markdowntoimage?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/markdowntoimage](https://docs.apiverve.com/ref/markdowntoimage?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
