import React, {useState} from 'react'
import {connect} from "react-redux"
import {setReview} from "../../../infrastructure/redux/actions/bookshelf"
import {successNotify} from "../../../infrastructure/utils/toastNotifications";
import DownloadButton from "../../../common/components/DownloadButton";

const Bookshelf = ({books, reviews, setReview}) => {

  const [state, setState] = useState([])


  const handleSaveClick = (id, index) => () => {
    if (state[index]?.review !== reviews.find(review => review.id === id)?.review ||
        state[index]?.starNumber !== reviews.find(review => review.id === id)?.rating
    ) {
      setReview({id, review: state[index].review, rating: state[index].starNumber})
      successNotify()
    }
  }

  const handleTextAreaChange = (index) => (e) => {
    setState(prevState => Object.assign([...prevState],  {[index]: {review: e.target.value, starNumber: state[index]?.starNumber}}))
  }

  const handleStarMouseMove = (index, value) => () => {
    setState(prevState => Object.assign([...prevState],  {[index]: {review: state[index]?.review, starNumber: value}}))
  }

  if (books.length === 0) {
    return (
      <div className="text-center mt-5 text-2xl">
        It seems like you don't have any books on your shelves.<br/>
        You can go to Library and pick any book you want.
      </div>
    )
  }

  return (
    <div className="m-2">
      <DownloadButton />
      {books.map((book, index) => {
        const { volumeInfo } = book
        return (
          <div key={index} className="shadow-xl mb-10 border-2 border-black-600 rounded">
            <div className="pt-10">
              <div className="max-w-sm rounded overflow-hidden flex my-0 mx-auto">
                <img className="w-50 h-40 m-auto" src={volumeInfo.imageLinks?.thumbnail} alt=""/>
                <div className="px-6 py-4 w-60">
                  <div className="font-bold text-xl mb-2">
                    {volumeInfo?.authors?.map((author, authorIndex) => <div key={authorIndex}>{author}</div>)}
                  </div>
                  <div className="font-bold text-xl mb-2">{volumeInfo.title}</div>
                  <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
                  />
                  <ul className="flex justify-center">
                    {[...Array(5).keys()].map((_, arrayIndex) =>
                      <li key={arrayIndex+1} onMouseMove={handleStarMouseMove(index, arrayIndex+1)}>
                        <i
                          className={`fa-star fa-sm text-yellow-500 mr-1 cursor-pointer
                                      star-${arrayIndex+1} ${arrayIndex+1 <= (state[index]?.starNumber ||
                                              reviews.find(review => review.id === book.id)?.rating) 
                                                ? 'fas'
                                                : 'far'}`}
                        />
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <textarea
                className="p-2.5 mt-5 h-40 text-gray-700 w-full text-base border-t-2 border-b-2 border-black-200 focus:outline-none focus:border-gray-300 focus:border-opacity-85 resize-none "
                defaultValue={reviews.find(review => review.id === book.id)?.review}
                onChange={handleTextAreaChange(index)}
                value={state[index]?.review}
                placeholder={"Type here..."}
              />
            </div>
            <div className="flex justify-end p-2 gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleSaveClick(book.id, index)}
              >
                Save
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.libraryReducer.books,
    reviews: state.bookshelfReducer.reviews
  }
}

export default connect(mapStateToProps, {setReview})(Bookshelf)