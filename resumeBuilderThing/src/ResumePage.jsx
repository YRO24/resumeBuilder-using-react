import { use, useState } from "react";
import './resetAndMore.css';


export default function ResumePage() {
const stuff = [
    'Sarah Johnson',
    'Senior Software Engineer at Tech Innovations Inc.',
    'Email: sarah.johnson@email.com\nPhone: (555) 123-4567\nLocation: San Francisco, CA\nLinkedIn: linkedin.com/in/sarahjohnson',
    'JavaScript • React • Node.js • Python • TypeScript • AWS • Docker • Git',
    'Master of Science in Computer Science\nStanford University, 2018\n\nBachelor of Science in Software Engineering\nUC Berkeley, 2016\nGPA: 3.8/4.0',
    'Results-driven software engineer with 7+ years of experience building scalable web applications and leading development teams. Passionate about creating efficient, user-friendly solutions and mentoring junior developers. Proven track record of delivering high-impact projects on time and exceeding performance benchmarks.',
    'Senior Software Engineer • Tech Innovations Inc. • 2020-Present\n• Led a team of 5 developers in building a microservices architecture that improved system performance by 40%\n• Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes\n• Architected and deployed cloud infrastructure serving 2M+ daily active users\n\nSoftware Engineer • Digital Solutions Corp • 2018-2020\n• Developed responsive web applications using React and Node.js\n• Collaborated with cross-functional teams to deliver 15+ client projects\n• Reduced page load times by 60% through code optimization\n\nJunior Developer • StartUp Labs • 2016-2018\n• Built RESTful APIs and integrated third-party services\n• Participated in agile development processes and code reviews',
    'Technical Proficiencies\n• Frontend: React, Vue.js, HTML5, CSS3, Tailwind\n• Backend: Node.js, Express, Python, Django\n• Database: PostgreSQL, MongoDB, Redis\n• DevOps: AWS, Docker, Kubernetes, Jenkins\n• Tools: Git, JIRA, Figma, Postman\n\nCertifications\n• AWS Certified Solutions Architect\n• Certified Scrum Master (CSM)'
];
console.log(stuff.length);
const [divTexts , setDivTexts] = useState({div1:stuff[0], div2:stuff[1],div3:stuff[2],div4:stuff[3],div5:stuff[4],div6:stuff[5],div7:stuff[6],div8:stuff[7]});
const [activeDiv,SetActiveDiv] = useState('div1');
const [styleTheme, setStyleTheme] = useState('modern'); // modern, classic, minimal
const [inspectMode, setInspectMode] = useState(false);
const [scale, setScale] = useState(0.50); // Start at 50% for better initial view
const [rotation, setRotation] = useState(0);

    const renderListItems = (text) => {
        const items = text.split('\n').filter(item => item.trim());
        return items.map((item, index) => {
            if (item.startsWith('•')) {
                return <li key={index}>{item.substring(1).trim()}</li>;
            }
            return <div key={index} style={{marginBottom: '0.5rem'}}>{item}</div>;
        });
    };

    return (
        <div className="encloser">
                <div className="styleToggle">
                    <h4>Themes</h4>
                    <button 
                        className={styleTheme === 'modern' ? 'active' : ''} 
                        onClick={() => setStyleTheme('modern')}
                    >
                        Modern
                    </button>
                    <button 
                        className={styleTheme === 'classic' ? 'active' : ''} 
                        onClick={() => setStyleTheme('classic')}
                    >
                        Classic
                    </button>
                    <button 
                        className={styleTheme === 'minimal' ? 'active' : ''} 
                        onClick={() => setStyleTheme('minimal')}
                    >
                        Minimal
                    </button>
                </div>

                <div className="controlToggle">
                    <h4>Controls</h4>
                    <button 
                        className={inspectMode ? 'active' : ''} 
                        onClick={() => setInspectMode(!inspectMode)}
                    >
                        {inspectMode ? 'Edit Mode' : 'Inspect Mode'}
                    </button>
                    
                    <div className="zoomControls">
                        <label>Zoom</label>
                        <div>
                            <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))}>-</button>
                            <span>{Math.round(scale * 100)}%</span>
                            <button onClick={() => setScale(s => Math.min(2, s + 0.1))}>+</button>
                        </div>
                    </div>
                    
                    <div className="rotateControls">
                        <label>Rotate</label>
                        <div>
                            <button onClick={() => setRotation(r => r - 15)}>↶</button>
                            <span>{rotation}°</span>
                            <button onClick={() => setRotation(r => r + 15)}>↷</button>
                        </div>
                    </div>
                    
                    <button onClick={() => { setScale(0.75); setRotation(0); }}>
                        Reset
                    </button>
                </div>

                <div className="cardContainer">
                    <div 
                        className={`page ${styleTheme}`}
                        style={{
                            transform: `scale(${scale}) rotate(${rotation}deg)`,
                            transition: 'transform 0.3s ease',
                            pointerEvents: inspectMode ? 'none' : 'auto'
                        }}
                    >
            <div className="topHalf">
                <h1 className="name" onClick={()=>SetActiveDiv('div1')}>{divTexts.div1}</h1>
                <h3 className="jobTitle" onClick={()=>SetActiveDiv('div2')}>{divTexts.div2}</h3>
            </div>

                        <div className="bottomHalf">
                <div className="subsection1">
                    <div className="contactSection" onClick={()=>SetActiveDiv('div3')}>
                    <h3>C o n t a c t</h3>
                    <div className="list">
                                    {renderListItems(divTexts.div3)}
                                    </div>
                                </div>
                                <div className="Interests" onClick={()=>SetActiveDiv('div4')}>
                                    <h3 className="interests">Skills</h3>
                                    <div>{divTexts.div4}</div>
                                </div>
                                <div className="Education">
                                    <h3 className="Education" onClick={()=>SetActiveDiv('div5')}>E d u c a t i o n</h3>
                                    {renderListItems(divTexts.div5)}
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
                                        {renderListItems(divTexts.div7)}
                                    </div>
                                </div>
                                </div>
                                <div className="subsections">
                                    <div className="skills" onClick={()=>SetActiveDiv('div8')}>
                                        <h3>S k i l l s</h3>
                                        <div className="list-items">
                                        {renderListItems(divTexts.div8)}
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                    
                    {!inspectMode && (
                        <textarea 
                            className="inputbox" 
                            value={divTexts[activeDiv]} 
                            onChange={(e)=>{
                                setDivTexts(
                                    {
                                        ...divTexts,[activeDiv]: e.target.value
                                    }
                                );
                            }}
                        />
                    )}
        </div>
    );
}