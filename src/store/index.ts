import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
// import { useDispatch, useSelector } from 'react-redux'
// import type { TypedUseSelectorHook } from 'react-redux'
//
// import app from 'features/App/reducer'
// import userData from 'features/UserData/reducer'
// import favorites from 'features/Favorites/reducer'
// import type { T_RootState } from './types'
//
//
// const reducer = combineReducers({
//     app,
//     userData,
//     favorites,
// })

const store = configureStore({ reducer: reducers })

export default store
