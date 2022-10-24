import { Link } from "react-router-dom"
import "./navBar.css"

const BUTTON_LIST = [
    { label: "Hakem", url: "" },
    { label: "Maç", url: "" },
    { label: "Fikstür", url: "" },
    { label: "Profil", url: "" },
];

export default function NavBar() {

    return (
        <div id="navBar">
            <h3>Hello</h3>
            <ul>
                {BUTTON_LIST.map(({ label, url}) => {
                    return (
                        <Link key={label} to={url} className={"nav-link"}>{label}</Link>
                    );
                })}
            </ul>
        </div>
    );
};

