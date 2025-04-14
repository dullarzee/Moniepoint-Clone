import { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'

MobileHomePageNavigator.propTypes = {

    
}
export default function MobileHomePageNavigator(){

    const [homePage, setHomePage] = useState(useLocation().pathname);
    const url = useLocation().pathname;

    useEffect(()=>{
    setHomePage(url);
    },[url])

    console.log(useLocation().pathname);

    return(
        <>
         <div className="lg:hidden grid grid-cols-2 fixed h-[8%] w-full bg-primaryBlue z-50">
            <span className={` h-full flex justify-center items-center cursor-pointer hover:bg-white/20 ${homePage === '/business' ? 'text-white bg-white/20' : 'text-white/70'}`}><Link to="/business">Business</Link></span>
            <span className={` h-full flex justify-center items-center cursor-pointer hover:bg-white/20 ${homePage === '/personal' ? 'text-white bg-white/20' : 'text-white/70'}`}><Link to="/personal">Personal</Link></span>
         </div>
        </>
    );
}