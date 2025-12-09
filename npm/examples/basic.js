/**
 * Basic Example - Markdown to Image API
 *
 * This example demonstrates how to use the Markdown to Image API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const markdowntoimageAPI = require('../index.js');

// Initialize the API client
const api = new markdowntoimageAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "markdown": "# Sample Markdown Document\n\nThis is a **sample** markdown document that will be converted to an image.\n\n## Features\n\n- Supports headers\n- Supports **bold** and *italic* text\n- Supports lists\n\n## Example\n\nThis markdown will be rendered as a visual image with customizable dimensions.",
  "width": 1280,
  "height": 800,
  "format": "png"
};

// Make the API request using callback
console.log('Making request to Markdown to Image API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
