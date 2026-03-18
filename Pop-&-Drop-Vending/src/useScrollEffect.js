import { useEffect, useRef, useState } from "react";

export default function useScrollEffect() {
    const ref  = useRef(null); // This will attach to the DOM Element
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver( // This will watch when the element is on the screen
            ([entry]) => { // This will run when the element is on the screen
                if (entry.isIntersecting) { // if the element is visible on the screen 
                    setVisible(true);
                    observer.disconnect(); // This will animate one time only
                }
            },
            { threshold: 0.1 } // This triggers when 15% of the element is shown 
        );

        if (ref.current) observer.observe(ref.current); // This is the cleanup function 
        
        return () => observer.disconnect(); // This will run when the component unmounts
    }, []);
    return [ref, visible];
}