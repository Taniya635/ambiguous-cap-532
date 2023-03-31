import React from 'react'
import { Link } from 'react-router-dom'

const links=[
    {path:"/", text:"Home"},
    {path:"/kids",text:"Kids"},
    {path:"/men",text:"Men"},
    {path:"/women",text:"Women"},
    {path:"/offers",text:"Offers"}
]

const Navbar = () => {
  return (
    <div>Navbar
        {
            links.map((el)=>(
                <Link path={el.path} to={el.path}>
                {el.links}
                </Link>
            ))
        }
    </div>
  )
}

export default Navbar