
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../data'

const services = [
  {
    name: 'UI/UX Design',
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo veniam provident ducimus molestias.",
    link: 'Learn more'
  },
  {
    name: 'Web Development',
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo veniam provident ducimus molestias.",
    link: 'Learn more'
  },
  {
    name: 'Androin App',
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo veniam provident ducimus molestias.",
    link: 'Learn more'
  },
  {
    name: 'Search Engeen',
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo veniam provident ducimus molestias.",
    link: 'Learn more'
  },
]

const Service = () => {
  return (
    <section className='sec' id='service'>
      <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>

            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex-1 lg:bg-service bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0'
            
            >
              <h2 className='h2 text-accent mb-6'>What I Do.</h2>
              <h3 className='h3 max-w-[455px] mb-16'>I'm a Front-end web Developer with over 4 Years of experience</h3>
              <button className='btn btn-sm'>
                  See my work
              </button>
            </motion.div>
          

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
          >
              <div>
                {services.map((item, index) => (
                  
                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>

                      <div className='max-w-[476px]'>
                          <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{item.name}</h4>
                          <p className='font-secondary leading-tight'>{item.desc}</p>
                      </div>
                      {/* **** */}
                      <div className='flex flex-col flex-1 items-end'> 
                        <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href="#"><BsArrowUpRight/></a>
                        <a className='text-gradient text-sm' href="#">{item.link}</a>
                      </div>

                    </div>
                ))}
              </div>
           </motion.div>

          </div>
      </div>
    </section>
  )
}

export default Service