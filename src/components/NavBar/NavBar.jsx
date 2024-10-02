import CartWidget from "../CartWidget/CardWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>TSL</h3>

            <div>
                <button>T-shirts</button>
                <button>Garrafas</button>
                <button>Proteinas</button>
            </div>
            <CartWidget/>

        </nav>
    )
}

export default NavBar