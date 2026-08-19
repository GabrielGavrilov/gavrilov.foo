import { Outlet } from 'react-router';
import Sidebar from '../../features/sidebar/sidebar';
import { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <main className="h-screen w-full">
      <Sidebar isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      <div
        className={
          `relative h-full transition-full duration-200 ` +
          (isOpen
            ? `left-64 w-[calc(100%-16rem)]`
            : `left-16 w-[calc(100%-4rem)]`)
        }
      >
        <Outlet />
      </div>
    </main>
  );
}
