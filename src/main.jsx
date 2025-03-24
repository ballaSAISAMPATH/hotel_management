import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Link} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HotelBooking from './app/components/book_hotels/HotelBooking.jsx'
import Bookings from './bookings'
import Wishlist from './wishlist'
import App from './App.jsx'
import store from './Store/store.js'
import { Provider } from 'react-redux'
const router=createBrowserRouter([
  {
    path: '/',element:<App/>, children:[
      {path:'/',element:<HotelBooking/>},
      {path:'/wishlist',element:<Wishlist/>},
      {path:'/bookings',element:<Bookings/>},
    ]    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={router}/>
      
     </Provider>
      
    </StrictMode>
)
