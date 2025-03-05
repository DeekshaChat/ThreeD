import { Link } from "react-router";
import Container from "../container/container";

export default function SubHeader() {

  const navItems = [
    {
      name: 'Home',
      active: true
    }, 
    {
      name: "Services",
      slug: "/service",
    },
    {
      name: "Interior",
      slug: "/service",
    },
    {
      name: "Exterior",
      slug: "/service",
    },
    {
      name: "Ceramic",
      slug: "/service",
    },
    {
      name: "Compounds & Polish",
      slug: "/service",
    },
    {
      name: "Professional",
      slug: "/service",
    },
    {
      name: "Accessories",
      slug: "/service",
    },
    {
      name: "Join Us",
      slug: "/service",
    },
  
  ]

  return (
    <>
      <header className='py-3 shadow bg-white'> 
        <Container>
          <nav className='flex'>
            <ul className='flex '>
              {navItems.map((navItem)=> (
                <nav className="container mx-auto px-4 flex gap-4">
                <Link to="/" className="text-black hover:underline">
                  {navItem.name}
                </Link>
              </nav>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  )
}