import { cn } from '../../utils/cn';

export function StatusChip({ status, className }) {
    const styles = {
        Completed: "border-green-500/30 text-green-600 dark:text-green-400",
        Scheduled: "border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400",
        Failed: "border-red-500/30 text-red-600 dark:text-red-400",
    };

    return (
        <span className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
            styles[status] || styles.Scheduled,
            className
        )}>
            {status}
        </span>
    );
}
