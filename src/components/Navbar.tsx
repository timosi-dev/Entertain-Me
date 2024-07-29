import { NavLink } from 'react-router-dom'

const Navbar = () => {
   const linkClass = ({ isActive }: { isActive: boolean }): string => { 
      return `${isActive ? "text-rose-400 hover:text-rose-200 px-3 py-2 font-semibold": "text-white hover:text-rose-200 px-3 py-2"}`;
   }

   function toggleMenu():void {
      const btn = document?.getElementById('menu-btn');
      const menu = document?.getElementById('menu');

      btn?.classList.toggle('open');
      menu?.classList.toggle('flex');
      menu?.classList.toggle('hidden');
   }

   

  return (
   <nav className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-stretch justify-between mx-6"
          >
            {/* <!-- Logo --> */}
            <NavLink className="text-white my-auto text-2xl font-bold" to="/">
              ENTERTAIN ME
            </NavLink>
            <div className="md:ml-auto md:block hidden">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >MOVIES </NavLink
                >
                <NavLink
                  to="/shows"
                  className={linkClass}
                  >TV-SHOWS</NavLink
                >
                <NavLink
                  to="/entertain"
                  className={linkClass}
                  >ENTERTAIN</NavLink
                >
              </div>
            </div>
            
              {/* hamburger menu */}
              <button id="menu-btn" className="block hamburger md:hidden focus:outline-none mt-2 " type="button" onClick={() => toggleMenu() }>
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
              </button>


            {/* <!-- display mobile menu  --> */}
            <div id="menu" className="hidden md:hidden absolute p-6 rounded-md right-6 top-16 x-100 bg-slate-900 w-1/2 opacity-90">
              <div className="flex flex-col items-end justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <NavLink
                  to="/"
                  className={linkClass}
                  >MOVIES </NavLink
                >
                <NavLink
                  to="/shows"
                  className={linkClass}
                  >TV-SHOWS</NavLink
                >
                <NavLink
                  to="/entertain"
                  className={linkClass}
                  >ENTERTAIN</NavLink
                >
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar