const API_DOCS = {
  "NgmExample": {
    "fileName": "src/example/example.ts",
    "className": "NgmExample",
    "description": "Whether a backdrop element should be created for a given modal (true by default).\r\nAlternatively, specify 'static' for a backdrop which doesn't close the modal on click.",
    "type": "Component",
    "selector": "ngm-example",
    "exportAs": "NgmExample",
    "inputs": [
      {
        "name": "activeIds",
        "type": "string | string[]",
        "description": "An array or comma separated strings of panel identifiers that should be opened"
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": [
      {
        "name": "toggle",
        "description": "Programmatically toggle a panel with a given id.",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgmExampleConfig": {
    "fileName": "src/example/example.ts",
    "className": "NgmExampleConfig",
    "description": "Configuration service for the NgbAccordion component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the accordions used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "closeOthers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  }
};

export default API_DOCS;