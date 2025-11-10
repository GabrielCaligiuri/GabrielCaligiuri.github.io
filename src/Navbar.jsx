//src Navbar.jsx
//Gabriel Caligiuri
import './navbar.css';

const items = [
  { label: 'Projects', href: '/projects', className: 'navbar__projects' },
  { label: 'Background', href: '/background', className: 'navbar__background'},
];

const logo = {label: <img src="/GCweblogo.png" alt="Gabe Caligiuri" className='navbar__home' />, href: '/'};


export default function Navbar() {
    return (        
        <header className="navbar">
            <nav className="navbar__container">
                <a href={logo.href} className={logo.className}>
                    {logo.label}
                </a>
                <div className='navbar__links'>
                    {items.map((item, index) => (
                        <a 
                        key={index}
                        href={item.href}
                        className={item.className}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
};