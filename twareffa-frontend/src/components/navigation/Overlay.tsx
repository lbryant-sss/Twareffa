import "./Overlay.css";
import { useState, useEffect } from "react";

export default function Overlay(){

    const [visible, setVisible] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <section className={`overlay ${visible ? 'show' : 'hide'}`}>
                <span className="overlay-logo">
                    twareffa
                </span>
            </section>
        </>
    )
}