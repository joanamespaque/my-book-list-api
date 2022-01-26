"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FavoriteBookSchema extends Schema {
  up() {
    this.create("favorite_books", (table) => {
      table.increments();
      table.timestamps();
      table.string("favorite_description", 500);
      table.string("book_id", 200).notNullable();
      table.string("title", 200).notNullable();
      table.string("authors", 300).notNullable();
      table.string("publisher", 150).notNullable();
      table.string("categories", 200).notNullable();
      table.string("infoLink", 300).notNullable();
      table.string("thumbnail", 300).notNullable();
      table.string("description", 1000).notNullable();
      table.date("publishedDate").notNullable();
      table.integer("pageCount").unsigned().notNullable();
    });
  }
  down() {
    this.drop("favorite_books");
  }
}

module.exports = FavoriteBookSchema;
