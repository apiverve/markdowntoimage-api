using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.MarkdowntoImage
{
    /// <summary>
    /// Query options for the Markdown to Image API
    /// </summary>
    public class MarkdowntoImageQueryOptions
    {
        /// <summary>
        /// Markdown text to convert (max 500,000 characters)
        /// Example: # Title\n\nThis is **bold** text.
        /// </summary>
        [JsonProperty("markdown")]
        public string Markdown { get; set; }

        /// <summary>
        /// Image width in pixels (100-3840, default: 1280)
        /// Example: 1280
        /// </summary>
        [JsonProperty("width")]
        public string Width { get; set; }

        /// <summary>
        /// Image height in pixels (100-2160, default: 800)
        /// Example: 800
        /// </summary>
        [JsonProperty("height")]
        public string Height { get; set; }

        /// <summary>
        /// Output format: png, jpeg, jpg, webp (default: png)
        /// Example: png
        /// </summary>
        [JsonProperty("format")]
        public string Format { get; set; }
    }
}
