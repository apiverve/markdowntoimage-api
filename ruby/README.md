# Markdown to Image API - Ruby Gem

Markdown to Image converts markdown text into visual image representations, rendering content as PNG, JPEG, or WebP images.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_markdowntoimage'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_markdowntoimage
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_markdowntoimage'

# Initialize the client
client = APIVerve::Markdowntoimage::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  markdown: "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.",
  width: 1280,
  height: 800,
  format: "png"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ markdown: "# Sample Markdown Document

This is a **sample** markdown document that will be converted to an image.

## Features

- Supports headers
- Supports **bold** and *italic* text
- Supports lists

## Example

This markdown will be rendered as a visual image with customizable dimensions.", width: 1280, height: 800, format: "png" })
  puts response["data"]
rescue APIVerve::Markdowntoimage::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Markdowntoimage::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Markdowntoimage::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/markdowntoimage?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/markdowntoimage?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/markdowntoimage?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
