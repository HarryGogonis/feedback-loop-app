export const schema = {
  "type": "object",
  "properties": {
  "title": {
    "type": "string",
    "maxLength": 200,
  },
  "description": {
    "type": "string",
    "maxLength": 500,
  },
},
"required": [
  "title",
  "description",
],
};
export const form = [
      {
        key: "theform",
        type: "form",
        title: "Report a bug",
        items: [
          {
            key: "title",
            type: "text",
          },
          {
            key: "description",
            type: "textarea",
            rows: 5,
          },
        ],
      },
    ];
export const model = {};
