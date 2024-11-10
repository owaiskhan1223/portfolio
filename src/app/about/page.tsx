import Header from "../components/header"; 

 export default function About(){
    return(
        <div className="aboutResponsive">
            <Header />
            <div className="aboutContainer">
              <h1 className="heading"><span className="theme "><span className="my">My</span> Self</span></h1>
              <p className="aboutPara">I am a hard-working and driven 
                individual who <br/>isn't afraid to face a challenge.
                 I'm passionate <br/>about my work and I know how to get the job done. <br/>
                 I would describe myself as an open and honest person<br/> who doesn't believe in misleading other people and tries<br/> to be fair in everything I do.</p>
                    <div className="about-pictureContainer">
                        <img src="my self.png"/>
                    </div>
                    <div>
                    <h2 className="hobbiHeading"><span className="theme2">Hobbies</span></h2>
                    <div className="hobbiesList">
                        <li>Travelling</li>
                        <li>Photography</li>
                        <li>Gaming</li>
                        <li>Sports</li>
                    </div>
                    <div className="pictureContainer">
                        <img src="travel.jpg"/>
                    </div>
                    <div className="picturecounter1"> 
                        <img src="photo.jpg"/>
                    </div>
                    <div className="picturecounter2">
                        <img src="gaming.webp"/>
                    </div>
                    </div>
            </div>
        </div>
    )  
 }
