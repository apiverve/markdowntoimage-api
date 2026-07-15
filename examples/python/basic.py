"""
Markdown to Image API - Basic Usage Example

This example demonstrates the basic usage of the Markdown to Image API.
API Documentation: https://docs.apiverve.com/ref/markdowntoimage
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/markdowntoimage'

def call_markdowntoimage_api():
    """
    Make a POST request to the Markdown to Image API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;markdown&#x27;: &#x27;# Sample Markdown Document\n\nThis is a **sample** markdown document that will be converted to an image.\n\n## Features\n\n- Supports headers\n- Supports **bold** and *italic* text\n- Supports lists\n\n## Example\n\nThis markdown will be rendered as a visual image with customizable dimensions.&#x27;,
    &#x27;width&#x27;: 1280,
    &#x27;height&#x27;: 800,
    &#x27;format&#x27;: &#x27;png&#x27;
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Markdown to Image API...\n')

    result = call_markdowntoimage_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
