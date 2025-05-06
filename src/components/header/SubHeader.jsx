import { Link } from "react-router";
import Container from "../container/container";
import DropDown from "../DropDown";
import { AccessoriesDropDownItems, CompoundsDropDownItems, ExteriorDropDownItems, InteriorDropDownItems, JoinUsDropDownItems, ServicesDropdownItems } from "../../constants/SubHeaderItems";

export default function SubHeader() {

  const navItems = [
    {
      name: 'Home',
      active: true,
      items: null
    }, 
    {
      name: "Services",
      slug: "/service",
      items: ServicesDropdownItems
    },
    {
      name: "Interior",
      slug: "/service",
      items: InteriorDropDownItems
    },
    {
      name: "Exterior",
      slug: "/service",
      items: ExteriorDropDownItems
    },
    {
      name: "Ceramic",
      slug: "/service",
      items: null
    },
    {
      name: "Compounds & Polish",
      slug: "/service",
      items: CompoundsDropDownItems
    },
    {
      name: "Professional",
      slug: "/service",
      items: null
    },
    {
      name: "Accessories",
      slug: "/service",
      items: AccessoriesDropDownItems
    },
    {
      name: "Join Us",
      slug: "/service",
      items: JoinUsDropDownItems
    },
  
  ];



  return (
    <>
      <header className='py-3 shadow bg-white'> 
        <Container>
          <nav className='flex'>
            <ul className='flex ' style={{ height: 20}}>
              {navItems.map((navItem, index)=> (
                <nav key={index} className="container mx-auto px-4 flex gap-4">
                  {
                    navItem.items ? 
                      <Link
                        key={index}
                        to="/" className="text-black hover:underline">
                        {navItem.name}
                      </Link>
                    :
                      <DropDown
                        label={ navItem.name
                          // <span className="flex items-center">
                          //   <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm mr-1">JD</span>
                          //   <span className="hidden md:inline">John Doe</span>
                          // </span>
                        } 
                        items={navItem.items} 
                      />
                  }
              </nav>
              ))}
            </ul>

          </nav>
        </Container>
      </header>
    </>
  )
}