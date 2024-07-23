import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagramSquare , FaTwitter  } from "react-icons/fa";

const Footer = () => {
  

  return (
   <nav className="bg-slate-800 font-bold">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-stretch justify-between"
          >
            
            <Link className="text-white my-auto text-xl text-bold" to="/">
              ENTERTAIN ME
            </Link>
            <div className='flex gap-4'>
               <Link className="text-white my-auto text-3xl hover:text-amber-400" to="/">
                  <FaFacebook />
               </Link>
               <Link className="text-white my-auto text-3xl hover:text-amber-400" to="/">
                  <FaInstagramSquare  />
               </Link>
               <Link className="text-white my-auto text-3xl hover:text-amber-400" to="/">
                  <FaTwitter />
               </Link>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer