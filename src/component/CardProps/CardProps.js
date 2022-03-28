import React from 'react'

import pic1 from '../Vid/rne.webp'
import pic2 from '../Vid/ror_allnation.jfif'
import pic3 from '../Vid/ror4.jpeg'
import pic4 from '../Vid/rorusa.jpeg'
import pic5 from '../Vid/rhapsody_1.jpeg'
import pic6 from '../Vid/children.jpeg'
import pic7 from '../Vid/Rhapsody_10.jpeg'
const CardProps = () => {

  const data = [
    {
      title: 'A UNIQUE OPPORTUNITY TO EARN',
      desc: 'While reading Rhasody of Realities on the Rhapsody WebApp',
      img1: pic1,
      bck : 'Opportunity to Earn '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Over 10 billions copies have been distributed in the past 20 years, with many testimonies recorded by users of the daily devotional in print. join us to make Rhapsody of realities reach a minimum 1 BILLION people in print/pyysical formats!',
      img1: pic2,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'PENETRATING WITH LANGUAGES',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic3,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic4,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic5,
      bck : 'Rhapsody of Reality '
  
    },
    
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic6,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic7,
      bck : 'Rhapsody of Reality '
  
    },
    

  ]




  return (
    <div className = 'flex justify-center items-center flex-col'>
      <div className = 'font-bold  text-pink-700 text-2xl'>Impact & Initiatives</div>
      <p>Rhapsody Impacts</p>
      <br/>
      
      <div className=' w-full flex justify-center w-11/12 items-center  flex-wrap pb-10'>
    
          
      {
        data.map((props) => (
                <div className='h-cardHeight  rounded cursor-pointer w-cardWidth    transition-all duration-500    m-3 rounded-t-xl  bg-dwhite hover:scale-105 hover:shadow-md'>
                    <div className='w-full h-inside bg-m-col'>
                      <img src={props.img1}  className='w-edwdith h-edheight object-cover rounded'/>
                    </div>
                    <div className='font-semibold mt-2 leading-5'>{props.title}</div>
                    <div className='leading-5 mt-1 text-sm'>{props.desc}</div>
                 </div>
        ))
     }
    </div>
    
    </div>
  )
}

export default CardProps