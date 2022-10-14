import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function NavBar() {
    return (
        <div className='NavBar'>
            <div className='LOGO' ><h3><DiamondIcon htmlColor='#fff' sx={{ fontSize: "7vh" }} />Diamond<span>Jewellery</span></h3></div>
            <a href="#" className='item'>Home</a>
            <a href="#" className='item'>About</a>
            <a href="#" className='item'>Enquire_Lists</a>
            <a href="#" className='item'>Contact</a>
            <div style={{ position: "absolute", top: "1.5vh", right: "1.5vw" }}>
                <button type="button" class="btn btn-primary position-relative" >
                    <ShoppingCartIcon htmlColor='#fff' sx={{ fontSize: "3vh" }} />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>

        </div>
    )
}

export default NavBar
