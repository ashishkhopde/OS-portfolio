import dayjs from "dayjs"

import { navIcons, navLinks } from '#constants'
import useWindowStore from "#store/window"

function Navbar() {

    const { openWindow } = useWindowStore();

    return (
        <nav>
            <div>
                <img src="images/logo.svg" alt="logo" />
                <p className='font-bold'>Ashish Portfolio</p>

                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id} onClick={() => openWindow(item.type)}>
                            <p>
                                {item.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map((icon) => (
                        <li key={icon.id}>
                            <img src={icon.img} alt="nav-icon" className='icon-hover' />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar