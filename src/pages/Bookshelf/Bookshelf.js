import React from 'react'
import {connect} from "react-redux"

const Bookshelf = ({books}) => {
  console.log(books)
  return (
    <div>
      {books.map((book, index) =>
        <div className="p-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg flex">
            <img className="w-50 h-40" src={book.bookCover} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.author}</div>
                <div className="font-bold text-xl mb-2">{book.bookName}</div>
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
                />
                <ul className="flex justify-center">
                  <li>
                    <i className="fas fa-star fa-sm text-yellow-500 mr-1" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                </ul>
                <textarea className="text-gray-700 text-base" />
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.libraryReducer.books
  }
}

export default connect(mapStateToProps)(Bookshelf)