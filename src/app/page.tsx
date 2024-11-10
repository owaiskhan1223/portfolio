import Header from "./components/header"
import Link from "next/link";

export default function Home() {
  return (
    <div className="mainContainer">
     <div className="homeHeader"> <Header/> </div>
      <div>
        <div className="mainHeading">My Portfolio</div>
        <div className="profile-pic">
           <img src="profile.jpg" alt="Profile Pic"/>
         </div>
        <h2 className="heading2"><span className="myName">Hello, I'm</span> <br/> Owais khan</h2><p className="descriptionHome">a person formally engaged in learning, especially<br/> one enrolled
           in a school or college; pupil: a student <br/>at Yale. Any person who studies, investigates, or performs <br/>research in a university or college setting.
           a person who is eng</p>
      </div>
    </div>
  );
}