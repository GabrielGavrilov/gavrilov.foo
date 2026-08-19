import { Link } from 'react-router';
import Profile from '../../components/profile';

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function Sidebar({ isOpen, toggleOpen }: Props) {
  return (
    <div>
      <aside
        className={
          `fixed h-full w-64 top-0 z-40 transition-all duration-200 bg-[#212121] ` +
          (isOpen ? `left-0` : `-left-48`)
        }
      >
        <div className="mx-6 my-6">
          <div className="flex w-full justify-between items-center">
            <Profile />
            {}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 stroke-slate-100 hover:cursor-pointer"
              onClick={toggleOpen}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M4 18L20 18"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{' '}
                <path
                  d="M4 12L20 12"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{' '}
                <path
                  d="M4 6L20 6"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{' '}
              </g>
            </svg>
          </div>
        </div>
        <div className="my-8">
          <ul>
            <Link
              to={'/'}
              className="sidebar-item flex text-white items-center w-full p-2 my-2 hover:bg-slate-50 hover:text-[#212121] cursor-pointer"
            >
              <span className="mx-6 font-semibold">Home</span>
            </Link>
            <Link
              to={'/projects'}
              className="sidebar-item flex items-center text-white w-full p-2 my-2 hover:bg-slate-50 hover:text-[#212121] cursor-pointer"
            >
              <span className="mx-6 font-semibold">Projects</span>
            </Link>
            <Link
              to={'/'}
              className="sidebar-item flex items-center text-white w-full p-2 my-2 hover:bg-slate-50 hover:text-[#212121] cursor-pointer"
            >
              <span className="mx-6 font-semibold">Resume</span>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
}
