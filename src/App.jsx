import React from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import HomeCards from './assets/components/HomeCards';
import JobListing from './assets/components/JobListing';
import ViewAllJobs from './assets/components/ViewAllJobs';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import {Router,createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage,{jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>} />
  <Route path='/jobs' element={<JobsPage/>} />
  <Route path='/add-job' element={<AddJobPage/>} />
  <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
  <Route path='*' element={<NotFoundPage/>} />
  </Route>
  )
  );
  const App = () => {
  return <RouterProvider router={router} />;
  };
  export default App;