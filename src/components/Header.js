import { MdChair } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/" className="logo"><MdChair /> Furniture's</Link>
    </div>
  )
}

export default Header
