'use strict'

const FavoriteBook = use('App/Models/FavoriteBook')

class FavoriteBookController {
  async store({ request }) {
    const dataToCreate = request.only([
      'description',
      'book_id',
      'book_title',
      'book_authors',
      'book_publisher',
      'book_categories',
      'book_info_link',
      'book_image_link',
      'book_description',
      'book_published_date',
      'book_page_count',
    ]);
    return await FavoriteBook.create(dataToCreate);
  }

  async list () {
    return await FavoriteBook.all();
  }

  async get ({ params }) {
    return await FavoriteBook.find(params.id);
  }


  async delete ({ params }) {
    const book = await FavoriteBook.findOrFail(params.id);

    await book.delete();

    return {
      message: 'Livro deletado com sucesso.'
    }
  }
}

module.exports = FavoriteBookController
