'use client'
import React from 'react'



export default function useScrollProgress() {
    const [completion, setCompletion] = React.useState(0)

    React.useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
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
