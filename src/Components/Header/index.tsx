import Image from "../../assets/images/img-1.png";


const Header = () => {
    return (
        <div>
            <header className='header'>
                Header 
            </header>
            <img src={Image} width={100} alt='my-img'/>
        </div>
    )
}

export default Header