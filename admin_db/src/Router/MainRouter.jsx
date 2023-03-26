import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Daseboard from '../Scense/Daseboard/Daseboard'
import Team from '../Scense/Team/Team'
import Contact from '../Scense/Contact/Contact'
import Form from '../Scense/Form/Form'
import Bar from '../Scense/Bar/Bar'
import Pie from '../Scense/Pie/Pie'
import Faq from '../Scense/Faq/Faq'
import Invoices from '../Scense/Invoices/Invoices'
import Geography from '../Scense/Geography/Geography'
import Calender from '../Scense/Calender/Calender'
import Lines from '../Scense/Line/Lines'
function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<Daseboard />} />
      <Route path='/team' element={<Team />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/invoices' element={<Invoices />} />
      <Route path='/form' element={<Form />} />
      <Route path='/bar' element={<Bar />} />
      <Route path='/pie' element={<Pie />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/line' element={<Lines />} />
      <Route path='/geography' element={<Geography />} />
      <Route path='/calender' element={<Calender />} />
    </Routes>
  )
}

export default MainRouter