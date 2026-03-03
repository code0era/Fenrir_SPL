import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Columns, Plus, AlertTriangle, AlertCircle, Ban, Search as SearchIcon } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { StatusChip } from '../../components/ui/StatusChip';
import { MOCK_STATS, MOCK_SCANS } from '../../data/mockData';

export default function Dashboard() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const severityIcons = {
        critical: Ban,
        high: AlertTriangle,
        medium: AlertTriangle, // Different color applied via classes
        low: SearchIcon // From reference design, low severity uses a magnifying glass icon
    };

    const getSeverityStyle = (level) => {
        const styles = {
            critical: "bg-severity-critical/20 text-severity-critical",
            high: "bg-severity-high/20 text-severity-high",
            medium: "bg-severity-medium/20 text-severity-medium",
            low: "bg-[#2563EB]/20 text-[#2563EB]" // Reference design low severity icon is blue
        };
        return styles[level];
    };

    return (
        <div className="space-y-6">
            {/* Header Context Bar */}
            <div className="bg-surface-light dark:bg-[#151515] border border-border-light dark:border-border-dark rounded-xl p-4 flex flex-wrap gap-x-8 gap-y-4 items-center text-sm font-medium items-center justify-between text-text-lightMuted dark:text-text-darkMuted">
                <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
                    <span>Org: <strong className="text-text-light dark:text-white font-semibold">Project X</strong></span>
                    <div className="w-px h-4 bg-border-light dark:bg-border-dark hidden sm:block" />
                    <span>Owner: <strong className="text-text-light dark:text-white font-semibold">Nammagiri</strong></span>
                    <div className="w-px h-4 bg-border-light dark:bg-border-dark hidden sm:block" />
                    <span>Total Scans: <strong className="text-text-light dark:text-white font-semibold">{MOCK_STATS.totalScans}</strong></span>
                    <div className="w-px h-4 bg-border-light dark:bg-border-dark hidden sm:block" />
                    <span>Scheduled: <strong className="text-text-light dark:text-white font-semibold">{MOCK_STATS.scheduled}</strong></span>
                    <div className="w-px h-4 bg-border-light dark:bg-border-dark hidden md:block" />
                    <span>Rescans: <strong className="text-text-light dark:text-white font-semibold">{MOCK_STATS.rescans}</strong></span>
                    <div className="w-px h-4 bg-border-light dark:bg-border-dark hidden lg:block" />
                    <span>Failed Scans: <strong className="text-text-light dark:text-white font-semibold">{MOCK_STATS.failed}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                    <svg className="w-4 h-4 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                    <span className="text-xs font-semibold">10 mins ago</span>
                </div>
            </div>

            {/* Severity Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(MOCK_STATS.severities).map(([level, data]) => {
                    const Icon = severityIcons[level];
                    return (
                        <div key={level} className="bg-surface-light dark:bg-[#151515] border border-border-light dark:border-border-dark rounded-xl p-5 flex flex-col gap-2 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <h3 className="capitalize text-sm font-medium text-text-lightMuted dark:text-text-darkMuted">{level} Severity</h3>
                                <div className={`p-1.5 rounded-lg ${getSeverityStyle(level)}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-end gap-3 mt-1">
                                <span className="text-4xl font-bold text-text-light dark:text-white leading-none">{data.count}</span>
                                <span className={`text-xs font-medium mb-1 flex items-center gap-1 ${data.trend === 'up' ? 'text-severity-critical dark:text-red-400' : 'text-severity-low dark:text-green-400'}`}>
                                    {data.trend === 'up' ? '↑' : '↓'} {data.change} {data.trend === 'up' ? 'increase' : 'decrease'} than yesterday
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Table Area */}
            <div className="bg-surface-light dark:bg-[#151515] border border-border-light dark:border-border-dark rounded-xl overflow-hidden flex flex-col">
                {/* Toolbar */}
                <div className="p-4 border-b border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface-light dark:bg-[#1A1E1D]/50 text-white">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-lightMuted dark:text-text-darkMuted" />
                        <Input
                            placeholder="Search scans by name or type..."
                            className="pl-9 bg-transparent border-border-light/50 dark:border-border-dark/50"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <Button variant="outline" className="flex-1 sm:flex-none gap-2 bg-transparent">
                            <Filter className="w-4 h-4" /> Filter
                        </Button>
                        <Button variant="outline" className="flex-1 sm:flex-none gap-2 bg-transparent">
                            <Columns className="w-4 h-4" /> Column
                        </Button>
                        <Button className="flex-1 sm:flex-none gap-2 px-6">
                            <Plus className="w-4 h-4" /> New scan
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                        <thead className="text-xs text-text-lightMuted dark:text-text-darkMuted uppercase border-b border-border-light dark:border-border-dark">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Scan Name</th>
                                <th className="px-6 py-4 font-semibold">Type</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                                <th className="px-6 py-4 font-semibold">Progress</th>
                                <th className="px-6 py-4 font-semibold text-center">Vulnerability</th>
                                <th className="px-6 py-4 font-semibold text-right">Last Scan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark text-text-light dark:text-text-dark">
                            {MOCK_SCANS.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((scan) => (
                                <tr
                                    key={scan.id}
                                    onClick={() => navigate(`/scan/${scan.id}`)}
                                    className="hover:bg-surface-lightHover dark:hover:bg-surface-darkHover cursor-pointer transition-colors group"
                                >
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <span className="font-semibold">{scan.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-text-lightMuted dark:text-text-darkMuted">{scan.type}</td>
                                    <td className="px-6 py-4 text-center">
                                        <StatusChip status={scan.status} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3 w-32">
                                            <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-1.5 overflow-hidden">
                                                <div
                                                    className={`h-1.5 rounded-full ${scan.status === 'Failed' ? 'bg-severity-critical' : 'bg-primary'}`}
                                                    style={{ width: `${scan.progress}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold">{scan.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-1 justify-center">
                                            <Badge variant="critical">{scan.vulnerabilities.critical || 0}</Badge>
                                            <Badge variant="high">{scan.vulnerabilities.high || 0}</Badge>
                                            {scan.vulnerabilities.medium && <Badge variant="medium">{scan.vulnerabilities.medium}</Badge>}
                                            {scan.vulnerabilities.low && <Badge variant="low">{scan.vulnerabilities.low}</Badge>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right text-text-lightMuted dark:text-text-darkMuted">
                                        {scan.lastScan}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Pagination (Visual only) */}
                <div className="p-4 border-t border-border-light dark:border-border-dark flex justify-between items-center text-sm text-text-lightMuted dark:text-text-darkMuted bg-surface-light dark:bg-[#1A1E1D]/30">
                    <span>Showing 15 of 100 Scans</span>
                    <div className="flex gap-1">
                        <Button variant="outline" size="icon" className="w-8 h-8 p-0 bg-transparent opacity-50 cursor-not-allowed border-border-light dark:border-border-dark">{'<'}</Button>
                        <Button variant="outline" size="icon" className="w-8 h-8 p-0 bg-transparent border-border-light dark:border-border-dark">{'>'}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
