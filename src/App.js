import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Error from './components/Error/Error';

function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetails></TopicDetails>
      },
      
    ]
  }
  
 ])

  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
