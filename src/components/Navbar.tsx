import { NavLink } from 'react-router-dom'

const Navbar = () => {
   const linkClass = ({ isActive }: { isActive: boolean }): string => { 
      return `${isActive ? "text-amber-400 hover:text-white px-3 py-2": "text-white hover:text-amber-400 px-3 py-2"}`;
   }

  return (
   <nav className="bg-slate-800 font-bold">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-stretch justify-between"
          >
            {/* <!-- Logo --> */}
            <NavLink className="text-white my-auto text-2xl text-bold" to="/">
              ENTERTAIN ME
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Movies </NavLink
                >
                <NavLink
                  to="shows"
                  className={linkClass}
                  >TV-Shows</NavLink
                >
                <NavLink
                  to="/entertain"
                  className={linkClass}
                  >Entertain</NavLink
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