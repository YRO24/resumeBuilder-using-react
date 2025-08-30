import { useState } from "react";
import './resetAndMore.css';
import { DndContext, useDraggable } from "@dnd-kit/core";

export default function ResumePage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable-textarea',
    });

    // The style now only relies on the state `position` and the `transform` from the hook
    const combinedStyle = {
        transform: `translate3d(${position.x + (transform ? transform.x : 0)}px, ${position.y + (transform ? transform.y : 0)}px, 0)`,
        cursor: transform ? 'grabbing' : 'grab',
        position: 'absolute',
        padding: '10px',
        touchAction: 'none',
    };

    function handleDragEnd(event) {
        const { delta } = event;
        setPosition(({ x, y }) => ({
            x: x + delta.x,
            y: y + delta.y,
        }));
    }
    
    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="main-content-container">
                <div className="encloser" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1,
                }}>
            <div className="page">
            <div className="topHalf">
                <h1 className="name">N a m e</h1>
                <h3 className="jobTitle">Where you work and your title</h3>
            </div>

                        <div className="bottomHalf">
                <div className="subsection1">
                    <div className="contactSection">
                    <h3>C o n t a c t</h3>
                    <div className="list">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sint.
                                    </div>
                                </div>
                                <div className="Interests">
                                    <h3 className="interests">Skills</h3>
                                    skill1
                                    <br />
                                    skill2
                                    <br />
                                    skill3
                                    <br />
                                    skill4
                                    <br />
                                </div>
                                <div className="Education">
                                    <h3 className="Education">E d u c a t i o n</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio fuga iste labore veniam ducimus dolor sunt velit asperiores? Porro.
                                </div>
                            </div>
                            <div className="subsection2">
                                <div className="subsections">
                                    <h3>S u m m a r y</h3>
                                    <div className="list-items">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsum.</p>
                                    </div>
                                </div>
                                <div className="subsections">
                                    <h3>W o r k E x p e r i e n c e</h3>
                                    <div className="list-items">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores ipsum sed iure architecto non minus quaerat possimus porro reprehenderit ab voluptas eveniet dicta voluptates, maxime libero repellat praesentium ipsam! Magni iusto itaque ratione deleniti provident sapiente in modi voluptate architecto? Harum repellendus sapiente rerum sunt quo autem dolor, suscipit molestias similique rem porro consequatur voluptatum consectetur ab accusamus, nemo quos possimus sed esse officiis, maxime nam reiciendis laboriosam! Possimus fugiat ipsum autem corrupti temporibus praesentium veritatis iure totam, sed vitae rerum minus, magnam pariatur, commodi harum incidunt quisquam nemo ipsam ab doloremque! Voluptatibus nostrum, dolorem aperiam eius iste alias!</p>
                                    </div>
                                </div>
                                <div className="subsections">
                                    <h3>S k i l l s</h3>
                                    <div className="list-items">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, dolores!</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                
                <div 
                    className="textAreaEncloser" 
                    ref={setNodeRef} 
                    style={combinedStyle} 
                    {...listeners} 
                    {...attributes}
                >
                    <textarea
                        className="inputbox"
                        defaultValue="Drag and drop me!"
                        style={{
                            padding: '20px',
                            width: '200px',
                            height: '100px',
                            resize: 'none',
                            border: '2px solid blue',
                        }}
                    />
                </div>
        </div>
        </DndContext>
    );
}