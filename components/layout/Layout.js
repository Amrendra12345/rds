import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children}) => {
  return (
    <div className='wrapper'>
        <Header />
      <main>
          {children}
      </main>
        <Footer />
    </div>
  )
}

export default Layout
