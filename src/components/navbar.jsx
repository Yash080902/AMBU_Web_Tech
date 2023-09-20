import logo from "../assets/home_assets/AMBU_logo.png"

const Navbar =() =>{
    return(
        <nav>
        <img src={logo} alt="AMBUvians" className="logo"/>
        <div className="title">
            <a href="#" id="home" className="active">HOME</a>
            <a href="#" id="about">ABOUT</a>
            <a href="#" id="services">SERVICES</a>
        </div>
        
    </nav>
    )
}
export default Navbar;