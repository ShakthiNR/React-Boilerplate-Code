import Image from "../../assets/images/img-1.png";
import { Link } from "react-router-dom"

const Header = () => {

    const imgStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div>
            <header className='header'>
                <Link to="/">home</Link> &nbsp;
                <Link to="about">about</Link>
            </header>
            <div style={imgStyle}>
                <img src={Image} width={100} alt='my-img' />
            </div>
        </div>
    )
}

export default Header