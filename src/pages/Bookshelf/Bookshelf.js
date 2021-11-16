import React from 'react'
import {connect} from "react-redux"

const Bookshelf = ({books}) => {
  console.log(books)
  return (
    <div>Bookshelf</div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.libraryReducer.books
  }
}

export default connect(mapStateToProps)(Bookshelf)