/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9vbshobgk9zljkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ohuphrt",
    "name": "level",
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
  const collection = dao.findCollectionByNameOrId("9vbshobgk9zljkk")

  // remove
  collection.schema.removeField("8ohuphrt")

  return dao.saveCollection(collection)
})
