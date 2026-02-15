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
        /// Markdown text to convert
        /// </summary>
        [JsonProperty("markdown")]
        public string Markdown { get; set; }

        /// <summary>
        /// Image width in pixels
        /// </summary>
        [JsonProperty("width")]
        public string Width { get; set; }

        /// <summary>
        /// Image height in pixels
        /// </summary>
        [JsonProperty("height")]
        public string Height { get; set; }

        /// <summary>
        /// Output image format
        /// </summary>
        [JsonProperty("format")]
        public string Format { get; set; }
    }
}
