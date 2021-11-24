import React, {useState} from 'react'
import {connect} from "react-redux"

const Bookshelf = ({books}) => {
  const [starNumber, setStarNumber] = useState(null)

  return (
    <div>
      {books.map((book, index) =>
        <div className="pt-10 flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg flex mr-6">
            <img className="w-50 h-40" src={book.bookCover} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.author}</div>
                <div className="font-bold text-xl mb-2">{book.bookName}</div>
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
                />
                <ul className="flex justify-center" >
                  {[...Array(5).keys()].map((_, index) =>
                    <li key={index} onMouseMove={() => setStarNumber(index)}>
                      <i className={`star-${index} ${index <= starNumber ? 'fas' : 'far'} fa-star fa-sm text-yellow-500 mr-1 cursor-pointer`} />
                    </li>
                  )}
                </ul>
              </div>
          </div>
          <textarea className="p-2.5 text-gray-700 w-full text-base border-2 border-black-200 focus:outline-none focus:border-gray-300 focus:border-opacity-85 shadow-lg rounded resize-none " />
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