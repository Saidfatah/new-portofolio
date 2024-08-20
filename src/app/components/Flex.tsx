import React, { ReactNode } from 'react';
import clsx from 'clsx';

type FlexProps = {
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'even';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    gap?: number | string;
    className?: string;
    children: ReactNode;
};

function resolveFlexProps({ justify, align, gap }: Omit<FlexProps, "children" | "className">) {
    const justifyMap = {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        even: 'justify-evenly',
    };

    const alignMap = {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
    };

    return {
        justifyClass: justify ? justifyMap[justify] : '',
        alignClass: align ? alignMap[align] : '',
        gapClass: gap ? `gap-${gap}` : '',
    };
}

const Flex: React.FC<FlexProps> = ({ justify, align, gap, children,className }) => {
    const { justifyClass, alignClass, gapClass } = resolveFlexProps({ justify, align, gap });

    return (
        <div className={clsx(className,'w-full h-full flex', justifyClass, alignClass, gapClass)}>
            {children}
        </div>
    );
};

export default Flex;
