import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'gray', className }) {
    const variants = {
        critical: "bg-severity-critical/10 text-severity-critical dark:bg-severity-critical/20 dark:text-red-400",
        high: "bg-severity-high/10 text-severity-high dark:bg-severity-high/20 dark:text-orange-400",
        medium: "bg-severity-medium/10 text-severity-medium dark:bg-severity-medium/20 dark:text-yellow-400",
        low: "bg-severity-low/10 text-severity-low dark:bg-severity-low/20 dark:text-green-400",
        gray: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    };

    return (
        <span className={cn(
            "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}
