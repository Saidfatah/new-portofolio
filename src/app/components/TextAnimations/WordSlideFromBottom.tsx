function TextRevealSlideFromBottom({ text }: { text: string }) {
    return (<p className="flex_wrapper rotateLineOut line_wrapper_Overflow">
        {text.split(' ').map(word=><span className="slide_word" >{word}</span>)}
    </p>);
}

export default TextRevealSlideFromBottom;