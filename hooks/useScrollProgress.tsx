import React from 'react'



export default function useScrollProgress(): number {
    const [completion, setCompletion] = React.useState<number>(0)

    React.useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress: number = window.scrollY;
            const scrollHeight: number = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                const scrollCompletion = (currentProgress / scrollHeight) * 100;
                setCompletion(parseFloat(scrollCompletion.toFixed(2)));
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, [])
    return completion
}
