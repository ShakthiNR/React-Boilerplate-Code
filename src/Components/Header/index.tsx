import Image from "../../assets/images/img-1.png";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <header className='header'>
                Header
            </header>
            <img src={Image} width={100} alt='my-img' />
            <Link to="/">home</Link> &nbsp;
            <Link to="about">about</Link>
        </div>
    )
}

export default Header