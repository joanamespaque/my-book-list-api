'use strict'

const FavoriteBook = use('App/Models/FavoriteBook')

class FavoriteBookController {
  async store({ request }) {
    const dataToCreate = request.only([
      'favorite_description',
      'book_id',
      'title',
      'authors',
      'publisher',
      'categories',
      'infoLink',
      'thumbnail',
      'description',
      'publishedDate',
      'pageCount',
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
