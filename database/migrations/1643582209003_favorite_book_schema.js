'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriteBookSchema extends Schema {
  up () {
    this.table('favorite_books', (table) => {
      this.alter('favorite_books', (table) => {
        table.string('categories', 200).alter();
      });
      this.alter('favorite_books', (table) => {
        table.string('categories', 150).alter();
      });
      this.alter('favorite_books', (table) => {
        table.string('infoLink', 350).alter();
      });
    })
  }

  down () {
    this.table('favorite_books', (table) => {
      // reverse alternations
    })
  }
}

module.exports = FavoriteBookSchema
