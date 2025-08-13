import { useState } from "react";
import './resetAndMore.css';
export default function LeftBox(){
    
    return (
        <>
        <div className="outerbox">
    <h3>Resume Builder</h3>

    <label htmlFor="name">Your name</label>
    <br />
    <input type="text" id="name" />
    <br />
    <label htmlFor="number">Your number</label>
    <br />
    <input type="text" id="position" />
    <br />
    <label htmlFor="email">Your email</label>
    <br />
    <input type="text" id="email" />
    <br />
    <label htmlFor="position">The position where you work at</label>
    <br />
    <input type="text" id="position" />
    <br />
</div>

        </>
    );
}
