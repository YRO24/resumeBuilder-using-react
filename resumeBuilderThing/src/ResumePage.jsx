import { use, useState } from "react";
import './resetAndMore.css';


export default function ResumePage() {
const stuff = ['N a m e','Where you work and your title', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sint.'
    ,'skill 1 , skill 2 , skill 3 , skill 4','Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio fuga iste labore veniam ducimus dolor sunt velit asperiores? Porro.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsum.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores ipsum sed iure architecto non minus quaerat possimus porro reprehenderit ab voluptas eveniet dicta voluptates, maxime libero repellat praesentium ipsam! Magni iusto itaque ratione deleniti provident sapiente in modi voluptate architecto? Harum repellendus sapiente rerum sunt quo autem dolor, suscipit molestias similique rem porro consequatur voluptatum consectetur ab accusamus, nemo quos possimus sed esse officiis, maxime nam reiciendis laboriosam! Possimus fugiat ipsum autem corrupti temporibus praesentium veritatis iure totam, sed vitae rerum minus, magnam pariatur, commodi harum incidunt quisquam nemo ipsam ab doloremque! Voluptatibus nostrum, dolorem aperiam eius iste alias!'
    ,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, dolores!'
] ;
console.log(stuff.length);
const [divTexts , setDivTexts] = useState({div1:stuff[0], div2:stuff[1],div3:stuff[2],div4:stuff[3],div5:stuff[4],div6:stuff[5],div7:stuff[6],div8:stuff[7]});
const [activeDiv,SetActiveDiv] = useState('div1');
    return (
        <div className="encloser">
                <div className="page">
            <div className="topHalf">
                <h1 className="name" onClick={()=>SetActiveDiv('div1')}>{divTexts.div1}</h1>
                <h3 className="jobTitle" onClick={()=>SetActiveDiv('div2')}>{divTexts.div2}</h3>
            </div>

                        <div className="bottomHalf">
                <div className="subsection1">
                    <div className="contactSection" onClick={()=>SetActiveDiv('div3')}>
                    <h3>C o n t a c t</h3>
                    <div className="list">
                                    {divTexts.div3}
                                    </div>
                                </div>
                                <div className="Interests" onClick={()=>SetActiveDiv('div4')}>
                                    <h3 className="interests">Skills</h3>
                                    {divTexts.div4}
                                </div>
                                <div className="Education">
                                    <h3 className="Education" onClick={()=>SetActiveDiv('div5')}>E d u c a t i o n</h3>
                                    {divTexts.div5}
                                </div>
                            </div>
                            <div className="subsection2">
                                <div className="subsections">
                                    <div className="Summary" onClick={()=>SetActiveDiv('div6')}>
                                    <h3>S u m m a r y</h3>
                                    <div className="list-items">
                                        <p>{divTexts.div6}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="subsections">
                                <div className="workExperience" onClick={()=>SetActiveDiv('div7')}>
                                    
                                    <h3>W o r k E x p e r i e n c e</h3>
                                    <div className="list-items">
                                        <p>{divTexts.div7}</p>
                                    </div>
                                </div>
                                </div>
                                <div className="subsections">
                                    <div className="skills" onClick={()=>SetActiveDiv('div8')}>
                                        <h3>S k i l l s</h3>
                                        <div className="list-items">
                                        <p>{divTexts.div8}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <textarea className="inputbox" value={divTexts[activeDiv]} onChange={(e)=>{
                        setDivTexts(
                            {
                                ...divTexts,[activeDiv]: e.target.value
                            }
                        );
                    }}/>
        </div>
    );
}