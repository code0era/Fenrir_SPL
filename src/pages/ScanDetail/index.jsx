import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, ChevronRight, Download, Square, Search, Network, FlaskConical, CheckSquare, FileText, ChevronDown, X, Ban, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MOCK_LOGS, MOCK_FINDINGS } from '../../data/mockData';

const steps = [
    { id: 'spidering', title: 'Spidering', icon: Search, status: 'active' },
    { id: 'mapping', title: 'Mapping', icon: Network, status: 'pending' },
    { id: 'testing', title: 'Testing', icon: FlaskConical, status: 'pending' },
    { id: 'validating', title: 'Validating', icon: CheckSquare, status: 'pending' },
    { id: 'reporting', title: 'Reporting', icon: FileText, status: 'pending' },
];

export default function ScanDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('activityLog');

    const getLogLine = (log, index) => {
        return (
            <div key={index} className="flex font-mono text-sm group hover:bg-white/5 dark:hover:bg-white/5 py-0.5 rounded px-2 -mx-2 transition-colors">
                <span className="text-text-lightMuted dark:text-gray-500 w-[85px] shrink-0">[{log.time}]</span>
                <span className="text-text-light dark:text-gray-300">
                    {log.text.split(new RegExp(`(${log.highlight}|${log.path}|${log.comment}|${log.focus}|\\*\\*IDOR vulnerability\\*\\*)`, 'g')).map((part, i) => {
                        if (part === log.highlight) return <span key={i} className="text-primary">{part}</span>;
                        if (part === log.path) return <span key={i} className="bg-white/10 dark:bg-white/10 px-1 rounded mx-1">{part}</span>;
                        if (part === log.comment) return <span key={i} className="text-[#3b82f6] dark:text-[#60a5fa]">{part}</span>;
                        if (part === log.focus) return <span key={i} className="text-primary bg-primary/10 px-1 rounded">{part}</span>;
                        if (part === '**IDOR vulnerability**') return <span key={i} className="text-severity-critical dark:text-red-400 font-bold">{part}</span>;
                        return part;
                    })}
                </span>
            </div>
        );
    };

    return (
        <div className="space-y-6 flex flex-col h-[calc(100vh-4rem)]">
            {/* Top Header Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center text-sm font-medium text-text-light dark:text-white gap-2">
                    <span className="text-lg font-semibold">Scan</span>
                    <ChevronRight className="w-4 h-4 text-text-lightMuted dark:text-text-darkMuted" />
                    <Link to="/dashboard" className="text-text-lightMuted dark:text-text-darkMuted hover:text-primary"><Home className="w-4 h-4" /></Link>
                    <ChevronRight className="w-4 h-4 text-text-lightMuted dark:text-text-darkMuted" />
                    <span className="text-text-lightMuted dark:text-text-darkMuted">Private Assets</span>
                    <ChevronRight className="w-4 h-4 text-text-lightMuted dark:text-text-darkMuted" />
                    <span className="text-primary">New Scan</span>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 border-border-light dark:border-border-dark bg-surface-light dark:bg-transparent text-text-light dark:text-white">
                        Export Report
                    </Button>
                    <Button variant="outline" className="gap-2 border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 hover:text-red-500 dark:hover:text-red-300">
                        Stop Scan
                    </Button>
                </div>
            </div>

            {/* Progress & Metadata Card */}
            <div className="bg-surface-light dark:bg-[#151515] border border-border-light dark:border-border-dark rounded-xl p-8 shrink-0">
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-end">
                    {/* Circular Progress */}
                    <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" className="stroke-border-light dark:stroke-[#252525]" strokeWidth="8" fill="none" />
                            {/* 0% progress, so no dasharray stroke needed yet, but keeping structure */}
                            <circle cx="50" cy="50" r="45" className="stroke-primary" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="283" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0D0C]/90 rounded-full m-2">
                            <span className="text-3xl font-bold text-white leading-none">0%</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">In Progress</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-10">
                        {/* Step Tracker */}
                        <div className="flex items-center justify-between relative max-w-4xl">
                            <div className="absolute left-6 right-6 top-6 h-[2px] bg-border-light dark:bg-[#252525] -z-10" />
                            {steps.map((step, idx) => {
                                const isActive = step.status === 'active';
                                return (
                                    <div key={step.id} className="flex flex-col items-center gap-3 bg-surface-light dark:bg-[#151515] px-2 z-10">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${isActive ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(12,200,168,0.3)]' : 'bg-surface-light dark:bg-[#0A0D0C] border-border-light dark:border-[#333] text-text-lightMuted dark:text-[#666]'}`}>
                                            <step.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-current'}`} />
                                        </div>
                                        <span className={`text-sm font-medium ${isActive ? 'text-text-light dark:text-white' : 'text-text-lightMuted dark:text-[#666]'}`}>{step.title}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Metadata Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 pt-6 border-t border-border-light dark:border-border-dark text-sm">
                            <div>
                                <div className="text-text-lightMuted dark:text-[#888] mb-1 text-xs">Scan Type</div>
                                <div className="font-semibold text-text-light dark:text-white">Grey Box</div>
                            </div>
                            <div>
                                <div className="text-text-lightMuted dark:text-[#888] mb-1 text-xs">Targets</div>
                                <div className="font-semibold text-text-light dark:text-white">google.com</div>
                            </div>
                            <div>
                                <div className="text-text-lightMuted dark:text-[#888] mb-1 text-xs">Started At</div>
                                <div className="font-semibold text-text-light dark:text-white">Nov 22, 09:00AM</div>
                            </div>
                            <div>
                                <div className="text-text-lightMuted dark:text-[#888] mb-1 text-xs">Credentials</div>
                                <div className="font-semibold text-text-light dark:text-white">2 Active</div>
                            </div>
                            <div>
                                <div className="text-text-lightMuted dark:text-[#888] mb-1 text-xs">Files</div>
                                <div className="font-semibold text-text-light dark:text-white">Control.pdf</div>
                            </div>
                            <div>
                                <div className="text-text-lightMuted dark:text-[#888] mb-1 text-xs">Checklists</div>
                                <div className="font-semibold text-primary">40/350</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Split View */}
            <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 overflow-hidden">
                {/* Left: Live Scan Console */}
                <div className="flex-[2] bg-surface-light dark:bg-[#151515] border border-border-light dark:border-border-dark rounded-xl flex flex-col min-h-0">
                    <div className="flex items-center justify-between p-3 border-b border-border-light dark:border-border-dark bg-white/50 dark:bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="font-semibold text-sm text-text-light dark:text-white">Live Scan Console</span>
                            <div className="px-2 py-0.5 rounded-full border border-border-light dark:border-[#333] text-xs text-text-lightMuted dark:text-[#888] flex items-center gap-1.5 ml-2">
                                <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                                Running...
                            </div>
                        </div>
                        <div className="flex gap-2 text-text-lightMuted dark:text-[#666]">
                            <ChevronDown className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                            <X className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div className="flex border-b border-border-light dark:border-[#252525] px-4 pt-2 shrink-0">
                        <button
                            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'activityLog' ? 'border-primary text-primary' : 'border-transparent text-text-lightMuted dark:text-[#888] hover:text-white'}`}
                            onClick={() => setActiveTab('activityLog')}
                        >
                            Activity Log
                        </button>
                        <button
                            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'verificationLoops' ? 'border-primary text-primary' : 'border-transparent text-text-lightMuted dark:text-[#888] hover:text-white'}`}
                            onClick={() => setActiveTab('verificationLoops')}
                        >
                            Verification Loops
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-[#0A0D0C]/50">
                        {activeTab === 'activityLog' && (
                            <div className="space-y-4 font-mono text-sm">
                                {MOCK_LOGS.map((log, i) => getLogLine(log, i))}
                            </div>
                        )}
                        {activeTab === 'verificationLoops' && (
                            <div className="text-sm text-text-lightMuted dark:text-[#888] text-center mt-10">No verification loops running...</div>
                        )}
                    </div>

                    <div className="flex items-center p-3 border-t border-border-light dark:border-[#252525] bg-white/50 dark:bg-white/5 text-xs text-text-lightMuted dark:text-[#888] gap-6 shrink-0">
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-text-lightMuted dark:bg-[#666]" /> Sub-Agents: 0</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-text-lightMuted dark:bg-[#666]" /> Parallel Executions: 2</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Operations: 1</div>
                    </div>
                </div>

                {/* Right: Finding Log */}
                <div className="flex-1 min-w-[320px] bg-transparent flex flex-col min-h-0">
                    <h3 className="font-semibold text-sm mb-4 text-text-light dark:text-white shrink-0">Finding Log</h3>
                    <div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-4">
                        {MOCK_FINDINGS.map(finding => (
                            <div key={finding.id} className="bg-surface-light dark:bg-[#151515] border border-border-light dark:border-border-dark p-4 rounded-xl flex flex-col gap-2 hover:border-gray-300 dark:hover:border-[#444] transition-colors cursor-pointer">
                                <div className="flex justify-between items-start">
                                    <Badge variant={finding.severity} className="capitalize">{finding.severity}</Badge>
                                    <span className="text-xs text-text-lightMuted dark:text-[#666]">{finding.time}</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text-light dark:text-white text-sm mt-1">{finding.title}</h4>
                                    <p className="text-primary text-xs mt-1 bg-primary/5 inline-block px-1.5 py-0.5 rounded font-mono">{finding.path}</p>
                                </div>
                                <p className="text-xs text-text-lightMuted dark:text-[#888] leading-relaxed mt-1">
                                    {finding.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="p-3 border-t border-border-light dark:border-[#252525] bg-surface-light dark:bg-[#151515] rounded-xl text-xs gap-4 shrink-0 flex items-center justify-between">
                        <div className="flex gap-4">
                            <span className="text-severity-critical dark:text-red-400 font-semibold">Critical: 0</span>
                            <span className="text-severity-high dark:text-orange-400 font-semibold">High: 0</span>
                            <span className="text-severity-medium dark:text-yellow-400 font-semibold">Medium: 0</span>
                            <span className="text-severity-low dark:text-green-400 font-semibold">Low: 0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
