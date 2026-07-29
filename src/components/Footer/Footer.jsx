import './Footer.css'

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className='site-footer'>
           <p>&copy; <span class="footer-year">2024</span> Astha.
            Built with HTML,CSS,JS</p> 
        </footer>

    )
}
export default Footer; 