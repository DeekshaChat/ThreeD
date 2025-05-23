import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
    //   {
    //     path:'/login',
    //     element: (
    //       <AuthLayout authentication={false}>
    //         <Login/>
    //       </AuthLayout>
    //     )
    //   },
    //   {
    //     path: '/signup',
    //     element: (
    //       <AuthLayout authentication={false}>
    //         <Signup/>
    //       </AuthLayout>
    //     )
    //   },
    //   {
    //     path:'/all-posts',
    //     element: (
    //       <AuthLayout authentication>
    //         {" "}
    //         <AllPosts/>
    //       </AuthLayout>
    //     )
    //   },
    //   {
    //     path: '/add-post',
    //     element: (
    //       <AuthLayout authentication>
    //         {" "}
    //         <AddPost/>
    //       </AuthLayout>
    //     )
    //   },
    //   {
    //     path: '/edit-post/:slug',
    //     element: (
    //       <AuthLayout authentication>
    //         {" "}
    //         <EditPost />
    //       </AuthLayout>
    //     )
    //   },
    //   {
    //     path: "/post/:slug",
    //     element: <Post />,
    // },
    {
        path: '/product-detail',
        element: (
          <ProductDetail />
        )
      },  
    ]
  }
])
// createRoot(document.getElementById('root')).render(
//   <Provider store={store} >
//     <RouterProvider router={router}/>
//   </Provider>,
// )

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)
