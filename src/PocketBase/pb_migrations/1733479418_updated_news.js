/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrpgctq7z779c2a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8iw8spso",
    "name": "toptext",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrpgctq7z779c2a")

  // remove
  collection.schema.removeField("8iw8spso")

  return dao.saveCollection(collection)
})
