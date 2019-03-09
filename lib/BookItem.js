/**
 * Represents an item on the SearchResultList
 */

const BookItem = function (id, title, author, ratings, avgRating, thumb, description = '') {
  this.id = id
  this.title = title
  this.author = author
  this.ratings = ratings
  this.avg_rating = avgRating
  this.thumb = thumb
  this.description = description
}

export default BookItem
