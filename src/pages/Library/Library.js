import React, {useState} from 'react'
import { connect } from "react-redux";
import styles from './Library.module.css'
import {addBook, removeBook} from "../../infrastructure/redux/actions/library";
import { getBooksRequest } from "../../infrastructure/redux/actions/library";

const Library = ({getBooksRequest, foundBooks, loading, error, addBook, removeBook, library}) => {
  const [value, setValue] = useState('')

  if (loading) return <div>loading...</div>

  if (error) return <div>error...</div>

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSearch = () => {
    getBooksRequest(value)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <form className="flex w-3/5 rounded" onSubmit={handleSearch}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="px-4 py-2 w-full bg-gray-200 appearance-none outline-none border-2 border-gray-200 focus:border-gray-300 box-border rounded rounded-r-none" placeholder="Search..."
          />
          <button type="submit" className="flex  border-2 items-center justify-center px-4 rounded rounded-l-none border-l-0">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
          </svg>
          </button>
        </form>
      </div>
        <div className="flex flex-wrap gap-10 justify-center m-10">
          {foundBooks.map((book, index) => {
            const { volumeInfo } = book
            return (
              <div key={index} className="relative">
                {library.filter(library_book => book.id === library_book.id).length > 0
                  ? <>
                      <button
                        className="absolute z-40 -top-3 -left-3 bg-red-400 text-blue-100 p-1 w-18 h-8 rounded-full"
                        onClick={() => removeBook(book)}>
                          Remove
                      </button>
                      <button
                        className="absolute z-40 -top-3 -right-3 bg-gray-400 text-blue-100 p-1 w-16 h-8 rounded-full">
                          Added
                      </button>
                  </>
                  : <button
                    className="absolute z-40 -top-3 -right-3 bg-green-500 text-blue-100 p-1 w-10 h-10 rounded-full"
                    onClick={() => addBook(book)}>
                      Add
                  </button>
                }
                <div className='flex max-w-sm bg-white shadow-md rounded-lg relative overflow-hidden mx-auto'>
                  <div
                    className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                    data-movie-id="438631">

                    <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"/>

                    <div className={`${styles.noScrollbar} h-500 overflow-auto relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info`}>
                      <div className="poster__info align-self-end w-full">
                        <div className="h-32"/>
                        <div className="space-y-6 detail_info">
                          <div className="flex flex-col space-y-2 inner">
                            <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">{volumeInfo.title}</h3>
                            <div className="mb-0 text-lg text-gray-400">
                              {volumeInfo?.authors?.map((author, authorIndex) => <div key={authorIndex}>{author}</div>)}
                            </div>
                          </div>
                          <div className="flex flex-col datos_col">
                            <div className="text-sm text-gray-400">Genre:</div>
                            <div className="release">
                              {volumeInfo?.categories?.map((category, categoryIndex) => <div key={categoryIndex}>{category}</div>) || 'not given'}
                            </div>
                          </div>
                          <div className="flex flex-row justify-around datos">
                            <div className="flex flex-col datos_col">
                              <div className="text-sm text-gray-400">Rating:</div>
                              <div className="popularity">{volumeInfo.ratingsCount || '-'}</div>
                            </div>
                            <div className="flex flex-col datos_col">
                              <div className="text-sm text-gray-400">Pages:</div>
                              <div className="release">{volumeInfo.pageCount || 'not provided'}</div>
                            </div>
                          </div>
                          <div className="flex flex-col overview">
                            <div className="flex flex-col"/>
                            <div className="text-xs text-gray-400 mb-2">Overview:</div>
                            <p className="text-xs text-gray-100 mb-6">
                              {volumeInfo.description || 'not provided'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img alt='thumbnail' className="absolute inset-0 transform w-full -translate-y-4"
                         src={volumeInfo?.imageLinks?.thumbnail} style={{filter: 'grayscale(0)'}}/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </>
  )
}

const mapStateToProps = state => {
  return {
    library: state.libraryReducer.books,
    foundBooks: state.getBooksReducer.books,
    loading: state.getBooksReducer.loading,
    error: state.getBooksReducer.error
  }
}

export default connect(mapStateToProps, {addBook, removeBook, getBooksRequest})(Library)