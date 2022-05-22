import { IoSearchOutline } from "react-icons/io5";
import TopHeader from './TopHeader';
import Link from "next/link";

const Header = () => {
  return (
    <>
      <TopHeader />
      <header className="header">
        <div className="container-fluid">
          <div className='header_content'>
              <div className='logo'>
                  <img src="/img/logo.png" className="img-fluid" />
              </div>
              <div className='searchBox'>
                <div className="input-group">                
                    <input type="text" className="form-control" placeholder="Username" />
                    <span className="input-group-text"><IoSearchOutline /></span>
                </div>
              </div>
              <div className='menu'>
                  <ul>
                      <li>
                        <Link href="/services">
                        <a><img src='/img/support.png' className='img-fluid' /> Services</a>
                        </Link>
                        </li>
                      <li><a><img src='/img/box.png' className='img-fluid' /> Products</a></li>
                      <li>
                         <Link href="/Loginpage">
                          <a><img src='/img/user.png' className='img-fluid' /> Login</a>
                          </Link>
                       </li>
                      <li><a><img src='/img/cart.png' className='img-fluid' /> Cart </a></li>
                  </ul>
              </div>
          </div> 
       </div>     
    </header>
    </>
  )
}

export default Header;
