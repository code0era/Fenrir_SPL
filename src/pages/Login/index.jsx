import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Eye, EyeOff, Star } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useTheme } from '../../hooks/useTheme';

export default function Login() {
    const navigate = useNavigate();
    const { toggleTheme, theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app we'd validate here
        navigate('/dashboard');
    };

    return (
        <div className="flex min-h-screen bg-[#0A1110]">
            {/* Left Side Branding */}
            <div className="hidden lg:flex flex-col flex-1 relative overflow-hidden text-white/90 p-12 justify-between">
                {/* Abstract Background Gradient Blob */}
                <div className="absolute -bottom-[30%] -right-[10%] w-[150%] h-[150%] bg-gradient-to-tr from-red-600/30 via-orange-500/20 to-teal-900/40 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A1110]/80 pointer-events-none" />

                <div className="relative z-10 space-y-24 max-w-lg mt-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <span className="font-bold text-xl text-white tracking-widest">aps</span>
                    </div>

                    <div className="space-y-8">
                        <h1 className="text-5xl font-bold leading-tight text-white mb-12">
                            Expert level Cybersecurity <br />
                            in <span className="text-primary italic">hours</span> not weeks.
                        </h1>

                        <div className="space-y-6">
                            <h3 className="font-semibold text-white/90">What's included</h3>
                            <ul className="space-y-5">
                                {[
                                    "Effortlessly spider and map targets to uncover hidden security flaws",
                                    "Deliver high-quality, validated findings in hours, not weeks.",
                                    "Generate professional, enterprise-grade security reports automatically."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/70">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 space-y-2 pb-8">
                    <div className="flex items-center gap-2 text-primary">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold text-sm">Trustpilot</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-white">Rated 4.5/5.0</span>
                        <span className="text-white/50 text-sm">(100k+ reviews)</span>
                    </div>
                </div>
            </div>

            {/* Right Side Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative z-20">
                <div className="w-full max-w-md bg-white dark:bg-surface-dark rounded-3xl p-8 sm:p-10 shadow-2xl relative">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign up</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Already have an account? <a href="#" className="flex-inline text-primary hover:underline">Log in</a>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input placeholder="First name*" required />
                            <Input placeholder="Last name*" required />
                        </div>
                        <Input type="email" placeholder="Email address*" required />
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password (8+ characters)*"
                                required
                                className="pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>

                        <label className="flex items-start gap-3 mt-4 mb-6 cursor-pointer">
                            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" required />
                            <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                                I agree to Aps's <a href="#" className="flex-inline text-primary hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="flex-inline text-primary hover:underline">Privacy Policy</a>
                            </span>
                        </label>

                        <Button type="submit" className="w-full h-12 text-base rounded-full">
                            Create account
                        </Button>
                    </form>

                    <div className="mt-6 flex gap-3">
                        <Button variant="outline" className="flex-1 rounded-full h-12 bg-black hover:bg-black/90 text-white border-0 !p-0">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-full h-12 justify-center border-gray-200 bg-white hover:bg-gray-50 text-black border !p-0">
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-full h-12 bg-blue-600 hover:bg-blue-700 text-white border-0 !p-0">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.001 22.5C6.202 22.5 1.5 17.798 1.5 12C1.5 6.202 6.202 1.5 12.001 1.5c5.798 0 10.5 4.702 10.5 10.5 0 5.798-4.702 10.5-10.5 10.5zm6.54-15.02L16.2 7.228 14.1 6.516c-1.442-.489-2.91 1.055-2.31 2.455l.886 2.067H9.223l.887-2.067c.601-1.4-1.229-2.956-2.67-2.458L5.343 7.23 3.003 7.942v8.52h17.9v-8.52h-.363z" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
