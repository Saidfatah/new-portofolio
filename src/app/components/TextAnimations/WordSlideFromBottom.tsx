import clsx from 'clsx'

function TextRevealSlideFromBottom({ text, className, index }: { text: string, className?: string, index?: number }) {
    return (<span className={clsx("inline-block leading-[1em] will-change-transform overflow-hidden", className)}>
        <span className={`slide_word_${(index ?? 0) + 1}`} >{text}</span>
    </span>);
}

export default TextRevealSlideFromBottom;