import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QuizDetail from './components/QuizDetail/QuizDetail';
import Main from './layouts/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Statistics from './components/Statistics/Statistics';
import QuizPage from './components/QuizPage/QuizPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <QuizDetail></QuizDetail>
        },
        {
          path: '/quizes',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <QuizPage></QuizPage>
        },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '*', element: <div className='text-4xl font-semibold mt-20'>Sorry!! No Data Found 404</div> }
      ]
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center'></ToastContainer>
    </div>
  );
}

export default App;
