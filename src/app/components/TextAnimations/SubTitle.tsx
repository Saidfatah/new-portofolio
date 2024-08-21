import { ReactNode } from "react";
import clsx from 'clsx'

function SubTitle({ children, className }: { children: ReactNode, className?: string }) {
    return (<p className={clsx("font-[600] text-[16px] " + className)}>
        {children}
    </p>);
}

export default SubTitle;