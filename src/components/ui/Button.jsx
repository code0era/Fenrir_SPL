import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Button = forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
        secondary: "bg-surface-darkHover text-text-dark border border-border-dark hover:bg-surface-dark dark:bg-surface-dark dark:border-border-dark dark:hover:bg-surface-darkHover dark:text-white",
        outline: "border border-border-light dark:border-border-dark bg-transparent text-text-light dark:text-text-dark hover:bg-surface-lightHover dark:hover:bg-surface-darkHover",
        ghost: "bg-transparent text-text-light dark:text-text-dark hover:bg-surface-lightHover dark:hover:bg-surface-darkHover",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
    };

    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
});

Button.displayName = "Button";

export { Button };
