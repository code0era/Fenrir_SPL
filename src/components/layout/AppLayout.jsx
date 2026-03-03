import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function AppLayout() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Sidebar />
            <div className="lg:pl-64 flex flex-col min-h-screen">
                <main className="flex-1 p-4 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
