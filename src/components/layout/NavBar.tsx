import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NavBarProps {
  title?: string;
}

const NavBar = ({ title = 'Github Finder' }: NavBarProps) => {
  return (
    <nav className='navbar mb-12 shadow-xl bg-neutral text-stone-50'>
      <div className='navbar'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
            {title}
          </Link>
        </div>
      </div>
      <div className='flex-1 px-2 mx-2'>
        <div className='flex justify-end'>
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
