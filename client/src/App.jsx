import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import WriteArtical from './pages/WriteArtical'
import BlogTitle from './pages/BlogTitle'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import Community from './pages/Community'
import ReviewResume from './pages/ReviewResume'
import Home from './pages/Home'
import { useAuth } from '@clerk/clerk-react'
import {Toaster} from 'react-hot-toast';


function App() {
  // const {getToken} = useAuth()
  // useEffect(()=>{
  //   getToken().then((token)=>console.log(token));
  // },[])
  return (
    <div>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ai' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='write-article' element={<WriteArtical/>}/>
        <Route path='blog-titles' element={<BlogTitle/>}/>
        <Route path='generate-images' element={<GenerateImages/>}/>
        <Route path='remove-background' element={<RemoveBackground/>}/>
        <Route path='remove-object' element={<RemoveObject/>}/>
        <Route path='review-resume' element={<ReviewResume/>}/>
        <Route path='community' element={<Community/>}/>
      </Route>
    </Routes>

    </div>
  )
}

export default App
