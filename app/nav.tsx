import Link from "next/link";
import "./css/nav.css"

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-icon">
                <h3>Logo</h3>
            </div>
            <ul className="nav-bar">
                <li className="nav-item"><Link href="/dashboard/Dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link href="/dashboard/Product">Product</Link></li>
                <li className="nav-item"><Link href="/dashboard/Contact-Us">Contact Us</Link></li>
            </ul>
          
        </nav>
    )
}