import React, {useState} from 'react'
import {connect} from "react-redux"
import {setReview} from "../../infrastructure/redux/actions/bookshelf"

const Bookshelf = ({books, reviews, setReview}) => {
  const [starNumber, setStarNumber] = useState(null)

  return (
    <div>
      {books.map((book, index) =>
        <div key={index}>
          <div className="pt-10 flex">
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex mr-6">
              <img className="w-50 h-40 m-auto" src={book.bookCover} alt="" />
                <div className="px-6 py-4 w-60">
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
          <div className="flex justify-end mt-2.5 mr-1 gap-4">
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.libraryReducer.books,
    reviews: state.bookshelfReducer.books
  }
}

export default connect(mapStateToProps, {setReview})(Bookshelf)