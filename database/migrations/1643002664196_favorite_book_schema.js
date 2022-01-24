'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriteBookSchema extends Schema {
  up () {
    this.create('favorite_books', (table) => {
      table.increments()
      table.timestamps()
      table.string('description', 500)
      table.string('book_id', 200).notNullable()
      table.string('book_title', 200).notNullable()
      table.string('book_authors', 300).notNullable()
      table.string('book_publisher', 150).notNullable()
      table.string('book_categories', 200).notNullable()
      table.string('book_info_link', 300).notNullable()
      table.string('book_image_link', 300).notNullable()
      table.string('book_description', 1000).notNullable()
      table.date('book_published_date', 200).notNullable()
      table.integer('book_page_count').unsigned().notNullable()
    });
  }
}

module.exports = FavoriteBookSchema
