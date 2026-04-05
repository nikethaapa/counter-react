import ReactDOM from "react-dom/client";
import Counter from "./component/counter";
import Header from "./component/header";
import Footer from "./component/footer";


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<div style={{margin:"0",borderRadius:"16px",background: "linear-gradient(to right, #6E48AA, #9D50BB)"}}><Header/><Counter/><Footer/></div>)