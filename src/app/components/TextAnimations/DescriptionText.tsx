import { ReactNode } from "react";
import clsx from 'clsx'

function DescriptionText({ children, className }: { children: ReactNode, className?: string }) {
    return (<p className={clsx("font-[500] text-[16px]", className)}>
        {children}
    </p>);
}

export default DescriptionText;