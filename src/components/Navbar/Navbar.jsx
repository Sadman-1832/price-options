import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }

    ];


    return (
        <nav>
            <div className="text-3xl text-black flex md:hidden bg-yellow-200" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :
                        <AiOutlineMenu ></AiOutlineMenu>
                }

            </div>
            <ul className={`text-black font-semibold md:flex duration-1000 absolute md:static
            ${open ? 'top-20' : '-top-60'}
            bg-yellow-200 p-6 rounded-md mx-10`}>
                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;