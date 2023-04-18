import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Root from './pages/Root';
import Create from './pages/Create';
import Saved from './pages/Saved';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Create />} />
        <Route path="/saved" element={<Saved />} />
      </Route>
    ),
    {
      basename: '/color-scheme-lab',
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
