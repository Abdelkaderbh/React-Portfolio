import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topBar "+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> Abdelkader BH.</a>
          <div className="itemContainer">
          <WhatsAppIcon className="icon" /> <span> +216 52 33 01 63 </span>
          </div>
          <div className="itemContainer">
          <MailIcon className="icon" /> <span> gaderbh2@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default topbar