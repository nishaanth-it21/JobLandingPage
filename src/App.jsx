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
import EditJobPage from './Pages/EditJobPage';


  const App = () => {
    //add new job
    const addJob = async (newJob) => {
      const res = await fetch('/api/jobs',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newJob),
      });
      return;
    }
    //delete job
    const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`,{
        method:'DELETE'
      });
      return;
    }
    //update job
    const updateJob = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(job),
      });
      return;

    };

    
    const router = createBrowserRouter(
      createRoutesFromElements (
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>} />
      </Route>
      )
      );
  return <RouterProvider router={router} />;
  };
  export default App;