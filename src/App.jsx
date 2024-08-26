import './App.css'
import Layout from './layout'
import avatar from '../src/assets/profile.png'
import { Typography } from '@material-tailwind/react'

function App() {
  return (
    <Layout>
      <div className='home mx-auto'>
        <img src={avatar} alt="Blessing Ogoh" className='avatar' />
        <Typography variant='h3' className='md:max-w-[40rem] mx-auto my-6'>
          Frontend Accessibility Developer, Open-Source Contributor and occassionally, an Artist.
        </Typography>
        <Typography className='md:max-w-[30rem] mx-auto'>
          I craft amazing user-interfaces that are responsive and scalable. And, I preach the Accessibility gospel.
        </Typography>
      </div>
    </Layout>
  )
}

export default App
