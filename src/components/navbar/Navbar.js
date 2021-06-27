import './navbar.css'
const Navbar = () =>{
    return (
        <nav>
            <a href="#x" className="logo">Movies</a>
            <div className="nav-right">
                <input type="text" className="search" placeholder="search.." />
                <button class="login">Login</button>
            </div>
        </nav>
    )
}
export default Navbar;