import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Activity, Calendar, Bell, Settings, LifeBuoy, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FolderKanban, label: 'Projects', path: '#' },
    { icon: Activity, label: 'Scans', path: '/scans' },
    { icon: Calendar, label: 'Schedule', path: '#' },
];

const bottomNavItems = [
    { icon: Bell, label: 'Notifications', path: '#' },
    { icon: Settings, label: 'Settings', path: '#' },
    { icon: LifeBuoy, label: 'Support', path: '#' },
];

export function Sidebar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const NavContent = () => (
        <>
            <div className="flex items-center gap-2 px-6 py-6 mb-4">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <span className="font-bold text-xl text-text-light dark:text-white tracking-widest">aps</span>
            </div>

            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                isActive || item.label === 'Scans' && window.location.pathname.startsWith('/scan')
                                    ? "bg-primary/10 text-primary" // Active state
                                    : "text-text-lightMuted dark:text-text-darkMuted hover:bg-surface-lightHover dark:hover:bg-surface-darkHover hover:text-text-light dark:hover:text-text-dark"
                            )
                        }
                    >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </NavLink>
                ))}

                <div className="pt-8 pb-4">
                    <div className="h-px bg-border-light dark:bg-border-dark mx-3" />
                </div>

                {bottomNavItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.path}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-lightMuted dark:text-text-darkMuted hover:bg-surface-lightHover dark:hover:bg-surface-darkHover hover:text-text-light dark:hover:text-text-dark transition-colors"
                    >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="p-4 mt-auto">
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-surface-lightHover dark:bg-[#151515] cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="h-9 w-9 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden shrink-0">
                        {/* Simple avatar representation */}
                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M18 18C21.3137 18 24 15.3137 24 12C24 8.68629 21.3137 6 18 6C14.6863 6 12 8.68629 12 12C12 15.3137 14.6863 18 18 18Z" fill="#333" />
                            <path d="M9 28C9 23.0294 13.0294 19 18 19C22.9706 19 27 23.0294 27 28" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-light dark:text-white truncate">admin@edu.com</p>
                        <p className="text-xs text-text-lightMuted dark:text-text-darkMuted truncate">Security Lead</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-text-lightMuted dark:text-text-darkMuted" />
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
                onClick={() => setIsMobileOpen(true)}
            >
                <Menu className="h-5 w-5 text-text-light dark:text-text-dark" />
            </button>

            {/* Mobile Sidebar Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
                    <div className="fixed inset-y-0 left-0 w-64 bg-surface-light dark:bg-surface-darker border-r border-border-light dark:border-border-dark flex flex-col pt-4 pb-4">
                        <button
                            className="absolute top-6 right-4 p-1 rounded-md text-text-lightMuted dark:text-text-darkMuted hover:text-text-light dark:hover:text-text-dark"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <NavContent />
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex w-64 flex-col fixed inset-y-0 left-0 bg-surface-light dark:bg-[#0A0D0C] border-r border-border-light dark:border-border-dark z-30 pt-2 pb-4">
                <NavContent />
            </div>
        </>
    );
}
