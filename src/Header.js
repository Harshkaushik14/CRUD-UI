import logo from "./assets/LeadlogoD.png";
import logoMobile from "./assets/LeadlogoM.png";
import { BellIcon, MenuAlt1Icon, UserCircleIcon } from "@heroicons/react/solid";


function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <img src={logo} layout="fill" objectFit="contain" alt="" />
        </div>
        <div className="relative lg:hidden flex-shrink-0 w-20 cursor-pointer">
          <img src={logoMobile} layout="fill" objectFit="contain" alt=""  />
        </div>



     
        {/* left */}
        <div className="flex items-center justify-end space-x-4">
    
          <BellIcon className="navBtn hover:rotate-45"/>
          <UserCircleIcon className="navBtn"/>
          <p className="hidden lg:inline-block">User Name</p>
          <MenuAlt1Icon className="h-6 md:hidden cursor-pointer text-black"/>
         
        </div>
      </div>
     

  
    <hr/>

    
    </div>
  );
}

export default Header;
