import Routecompo from "./component/Routecompo";
import "../src/index.css";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from '@material-ui/icons/Close';
function App() {
  return (
    <>
      <div className="nav-header">
        {/* <div className="logo">
          <p>The</p>
          <span>Siren</span>
        </div> */}
        {/* <MenuIcon /> */}
        <Routecompo />
      </div>
    </>
  );
}

export default App;
