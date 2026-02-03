import { useState } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (linkName, e) => {
    e.preventDefault();
    setActiveLink(linkName);
  };

  return (
    <header style={{
      backgroundColor: 'rgba(44, 62, 80, 0.7)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      padding: '20px'
    }}>
      <h1>Жир</h1>
      <nav>
        <ul>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('Home', e)}
              style={{ 
                backgroundColor: activeLink === 'Home' ? 'rgba(52, 73, 94, 0.8)' : 'transparent',
                borderRadius: '4px'
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('About', e)}
              style={{ 
                backgroundColor: activeLink === 'About' ? 'rgba(52, 73, 94, 0.8)' : 'transparent',
                borderRadius: '4px'
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('Services', e)}
              style={{ 
                backgroundColor: activeLink === 'Services' ? 'rgba(52, 73, 94, 0.8)' : 'transparent',
                borderRadius: '4px'
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('Contact', e)}
              style={{ 
                backgroundColor: activeLink === 'Contact' ? 'rgba(52, 73, 94, 0.8)' : 'transparent',
                borderRadius: '4px'
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;