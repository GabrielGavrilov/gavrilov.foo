import { Outlet } from 'react-router';
import Sidebar from '../../features/sidebar';

export default function App() {
  return (
    <main className="h-screen w-full">
      <Sidebar />
      <div className="relative h-full left-60 w-[calc(100%-15rem)]">
        <Outlet />
      </div>
    </main>
  );
}
