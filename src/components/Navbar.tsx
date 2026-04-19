import dayjs from "dayjs";
// Coming from src/constants/index.ts
import { navIcons, navLinks } from "../constants";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-bold">Rishav's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img className="icon-hover" src={img} alt={`Icon ${id}`} />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format("dddd, D MMMM YYYY h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar