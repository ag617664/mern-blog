import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsGithub,BsTwitter,BsDribbble} from 'react-icons/bs'

function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 '>
    <div className="w-full max-w-7xl mx-auto ">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 ">
            <div className=" mt-5">
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-lg'>Abhi's</span>
        <span className='text-lg'>

        Blog
        </span>
      </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-6 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title='About'/>
                <Footer.LinkGroup col>
                    <Footer.Link>
                        100 JS Projects
                    </Footer.Link>
                    <Footer.Link>
                        Abhi's Blog
                    </Footer.Link>
                </Footer.LinkGroup>

                </div>
                <div>
                <Footer.Title title='Follow us'/>
                <Footer.LinkGroup col>
                    <Footer.Link>
                        Github
                    </Footer.Link>
                    <Footer.Link>
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>

                </div>
                <div>
                <Footer.Title title='Legal'/>
                <Footer.LinkGroup col>
                    <Footer.Link>
                        Terms & Conditions
                    </Footer.Link>
                    <Footer.Link>
                        Privacy Policy
                    </Footer.Link>
                </Footer.LinkGroup>

                </div>
                

            </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Abhi's Blog" year={new Date().getFullYear()}/>
        
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon icon={BsFacebook}/>
            <Footer.Icon icon={BsInstagram}/>
            <Footer.Icon icon={BsTwitter}/>
            <Footer.Icon icon={BsGithub}/>
            <Footer.Icon icon={BsDribbble}/>
        </div>
        </div>
    </div>
    
    </Footer>

  )
}

export default FooterCom