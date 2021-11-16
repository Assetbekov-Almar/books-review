import React from 'react'
import { connect } from "react-redux";
import styles from './Library.module.css'
import { books } from "./fakeData";
import {addBook} from "../../infrastructure/redux/actions/library/addBook";

const Library = ({addBook}) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center m-10">
      {books.map((book, index) =>
        <div key={index} className="relative">
          <button
            className="absolute z-40 -top-3 -right-3 bg-green-500 text-blue-100 p-1 w-10 h-10 rounded-full"
            onClick={() => addBook(book)}
          >Add</button>
          <div className='flex max-w-sm w-full bg-white shadow-md rounded-lg relative overflow-hidden mx-auto'>
            <div
              className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
              data-movie-id="438631">

              <div
                className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>

              <div className={`${styles.noScrollbar} h-500 overflow-auto relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info`}>
                <div className="poster__info align-self-end w-full">
                  <div className="h-32"></div>
                  <div className="space-y-6 detail_info">
                    <div className="flex flex-col space-y-2 inner">
                      <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">{book.bookName}</h3>
                      <div className="mb-0 text-lg text-gray-400">{book.author}</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="text-sm text-gray-400">Genre:</div>
                      <div className="release">{book.genre}</div>
                    </div>
                    <div className="flex flex-row justify-around datos">
                      <div className="flex flex-col datos_col">
                        <div className="text-sm text-gray-400">Rating:</div>
                        <div className="popularity">{book.rating}</div>
                      </div>
                      <div className="flex flex-col datos_col">
                        <div className="text-sm text-gray-400">Pages:</div>
                        <div className="release">{book.pageNo}</div>
                      </div>
                    </div>
                    <div className="flex flex-col overview">
                      <div className="flex flex-col"></div>
                      <div className="text-xs text-gray-400 mb-2">Overview:</div>
                      <p className="text-xs text-gray-100 mb-6">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img className="absolute inset-0 transform w-full -translate-y-4"
                   src={book.bookCover} style={{filter: 'grayscale(0)'}}/>
            </div>
          </div>
        </div>
            )}
    </div>
  )
}

export default connect(null, {addBook})(Library)