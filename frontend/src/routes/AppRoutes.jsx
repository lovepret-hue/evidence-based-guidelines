
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutHtain from '../pages/AboutHtain'
import MainLayout from '../layouts/MainLayout'
import Secretary from '../pages/Secretary'
import ResourceHubsCenters from '../pages/ResourceHubsCentres'
import ResourceCenters from '../pages/ResourceCenters'
import ScrollToTop from '../components/ScrollToTop'
import Objective from '../pages/Objective'
import CEGScientists from '../pages/CEGScientists'
import ProcessOfGuideslineDevelopment from '../pages/ProcessOfGuideslineDevelopment'
import StemCellTherapyGuidelines from '../pages/StemCellTherapyGuidelines'
import LungCancerTreatmentPalliationGuidelines from '../pages/LungCancerTreatmentPalliationGuidelines'
import WorkshopsConducted from '../pages/WorkshopsConducted'
import Contact from '../pages/Contact'
import PhotoGallery from '../pages/PhotoGallery'
import VideoSection from '../pages/VideoSection'
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
           <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='/abouthtain' element={<AboutHtain/>} />
                <Route path='/secretary' element={<Secretary/>} />
                <Route path='/resource-hubs' element={<ResourceHubsCenters/>} />
                <Route path='/resource-centers' element={<ResourceCenters />} />
                <Route path='/objectives' element={<Objective/>}/>
                <Route path='/cegscientists' element={<CEGScientists/>} />
                <Route path='/process-guidelines-development' element={<ProcessOfGuideslineDevelopment/>}/>
                <Route path='/stem-cell-therapy-guidelines' element={<StemCellTherapyGuidelines/>}/>
                <Route path='/lung-cancer-treatment-and-palliation-guidelines' element={<LungCancerTreatmentPalliationGuidelines/>} />
                <Route path='/workshop-conducted' element={<WorkshopsConducted/>} />
                <Route path='/gallery' element={<PhotoGallery />} />
                <Route path='/videos' element={<VideoSection />} />
                <Route path='/contact' element={<Contact />}/>
           </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes