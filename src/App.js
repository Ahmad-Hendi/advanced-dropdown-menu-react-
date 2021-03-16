import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as CheveronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';




// parent  

// in oreder to close and open a drop menu we should state
// for toggiling it's perfect to use !something becuase it gives whatever the oposit of what we are clicing for example
function App() {
  

  return (
    <Navbar>
      <NavItem icon= { <PlusIcon /> } />
      <NavItem icon= { <BellIcon /> } />
      <NavItem icon= { <MessengerIcon /> } />

      {/* where we will add the drop-down menue */}
      <NavItem icon={ <CaretIcon /> } > 
        
        <DropdownMenu />

      </NavItem>

    </Navbar>
  );
}
      


// FirstChild

// composition : write small reusable components
// props : pass data from parent to child
function Navbar(props) {
  return (
    <nav className="navbar"> 
       <ul className="navbar-nav"> { props.children } </ul>
    </nav>
  )
}

// SecondChild

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)} >
        {props.icon}
      </a>
      {/* showing the drop down when the open state is set to true */}
      { open && props.children }
    </li>
  )
}

// ThirdChild

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  
  {/* child of DropdownMenu */}
  function DropdownItem(props) {
    return (
    <a href="" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      <span className="icon-button"> {props.leftIcon} </span>

      {props.children}

      <span className="icon-right"> {props.rightIcon} </span>
    </a>
    );
  }

  return (
    <div className="dropdown">
      
      <CSSTransition 
      in={ activeMenu === 'settings' }  
      unmountOnExit  
      timeout={500} 
      classNames="menu-primary"
      > 
      {/* when it's truthy we will render its children into the UI */}
      {/* unmountOnExit: will remove this children when they are not active */}

      <div className="menu">

      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
      leftIcon={ <CogIcon /> }
      rightIcon={ <CheveronIcon /> }
      goToMenu= "settings"
      >
        settings
      </DropdownItem>
      </div>

      </CSSTransition>

      {/* a menu inside the first menu */}
      <CSSTransition 
      in={ activeMenu === 'main' }  
      unmountOnExit  
      timeout={500} 
      classNames="menu-secondary"
      > 
      {/* when it's truthy we will render its children into the UI */}
      {/* unmountOnExit: will remove this children when they are not active */}

      <div className="menu">
      <DropdownItem leftIcon={ <ArrowIcon /> } goToMenu="main" 
      />
      <DropdownItem>Setting</DropdownItem>
      </div>

      </CSSTransition>
    </div>
      )
    }
      
export default App;

    



// CSS transition 

// 1 - wrapping the elements
// 2 -








