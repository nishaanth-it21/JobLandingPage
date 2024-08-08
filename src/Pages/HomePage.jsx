import React from 'react'
import Hero from '../assets/components/Hero'
import HomeCards from '../assets/components/HomeCards'
import JobListing from '../assets/components/JobListing'
import ViewAllJobs from '../assets/components/ViewAllJobs'


const HomePage = () => {
  return (
   <>
   <Hero/>
   <HomeCards/>
   <JobListing isHome={true}/>
   <ViewAllJobs/>
   </>
  )
}

export default HomePage
