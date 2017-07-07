const API_DOCS = {
  "NgmExample": {
    "fileName": "src/example/example.ts",
    "className": "NgmExample",
    "description": "",
    "selector": "ngm-example",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgmModalOptions": {
    "fileName": "src/example/example.ts",
    "className": "NgmModalOptions",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "backdrop",
        "type": "boolean | \"static\"",
        "description": "Whether a backdrop element should be created for a given modal (true by default).\r\nAlternatively, specify 'static' for a backdrop which doesn't close the modal on click."
      },
      {
        "name": "container",
        "type": "string",
        "description": "An element to which to attach newly opened modal windows."
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "Whether to close the modal when escape key is pressed (true by default)."
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "Size of a new modal window."
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": "Custom class to append to the modal window"
      }
    ]
  }
};

export default API_DOCS;