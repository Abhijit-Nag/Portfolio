import "./menu.scss"
export default function Menu({ open, setOpen }) {
    return (
        <div className={"menu " + (open && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={() => setOpen(!open)}>Home</a>
                </li>

                <li>
                    <a href="#portfolio" onClick={() => setOpen(!open)}>Portfolio</a>
                </li>

                <li>
                    <a href="#works" onClick={() => setOpen(!open)}>Works</a>
                </li>

                <li>
                    <a href="#testimonial" onClick={() => setOpen(!open)}>Testmonials</a>
                </li> <li>
                    <a href="#contact" onClick={() => setOpen(!open)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}
