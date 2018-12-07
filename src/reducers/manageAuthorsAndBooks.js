import { combineReducers } from 'redux'

export default const rootReducer = combineReducers({authors: manageAuthors, books: manageBooks})

// export default function bookApp(state = {
//   authors: [],
//   books: []
// }, action) {
//   let idx
//   switch (action.type) {
//
//     case "ADD_BOOK":
//       return {
//         ...state,
//         books: [...state.books, action.book]
//       };
//
//     case "REMOVE_BOOK":
//       idx = state.books.indexOf(action.id);
//       return {
//         ...state,
//         books: [
//           state.books.slice(0, idx),
//           state.books.slice(idx + 1),
//         ]
//       };
//
//     case "ADD_AUTHOR":
//         return {
//           ...state,
//           authors: [...state.authors, action.author]
//         };
//
//     case "REMOVE_AUTHOR":
//       idx = state.authors.indexOf(action.id);
//       return {
//         ...state,
//         authors: [
//           state.authors.slice(0, idx),
//           state.authors.slice(idx + 1)
//         ]
//       };
//
//     default:
//       return state;
//     }
// };

const manageBooks = (state = [], action) {
  switch(action.type) {
    case "ADD_BOOK":
      return books: [...state.books, action.book]
    case "REMOVE_BOOK":
      let newbooks = state.filter(book => book.id !== action.id)
      return newbooks
    default
      return state
  }
}

const manageAuthors = (state = [], action) {
  switch(action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author]
    case "REMOVE_AUTHOR":
      let newauthors = state.filter(au => au.id !== action.id)
      return [newauthors]
    case "ADD_BOOK":
      return state.find(au => au.authorName === action.book.authorName) ? state : [...state, {authorName: action.book.authorName, id: uuid()}]
    default
      return state
  }
}
