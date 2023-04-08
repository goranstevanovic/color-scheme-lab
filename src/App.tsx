import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Root from './pages/Root';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />} />)
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
