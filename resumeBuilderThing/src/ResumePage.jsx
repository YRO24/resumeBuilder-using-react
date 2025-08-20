import { useState } from "react";
import './resetAndMore.css';
export default function ResumePage(){
    
    return (
        <>
        <div className="encloser">
            <div className="page">
            <div className="topHalf">
                <h1 className="name">N a m e</h1>
                <h3 className="jobTitle">Where you work and your title</h3>
            </div>

                <div className="subsection1">

                    <div className="contactSection">
                    <h3>C o n t a c t</h3>
                    <div className="list">
                    <ul>
                    <li>number</li>
                    <li>email</li>
                    <li>address</li>
                    <li>website</li>
                    </ul>
                    </div>
                    </div>
                    {/* left half of the bottom part of the page */}
                </div>
                <div className="subsection2">
                    {/* ya guessed it */}
                </div>

                {/* closing tag for page */}

            </div>  
            
        </div>
        <textarea name="inputbox" id="inputbox"></textarea>
        </>
    );
}
