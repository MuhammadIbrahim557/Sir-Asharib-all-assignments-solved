import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div><div>
        <h1>This is Navbar</h1> <br />
        <nav>
            <ul>
               <li><Link href="/">Go to Homepage</Link> </li> <br />
                <li><Link href="">Go to about</Link> </li> <br />
                <li><Link href=".pages/contact">Go to contact</Link> </li> <br />
                <li><Link href=".pages/footer">Go to footer</Link> </li> <br />
               
            </ul>
        </nav>
        </div></div>
  )
}

export default Navbar