import React from 'react';
import NavbarComp from './Components/NavbarComp';
import CardComp from './Components/CardComp';

const Page2 = () => {
  return (
    <div className="App">
      <NavbarComp />
      <h3 className='heading'> CRYPTOGRAPHY</h3>    
      <div className="d-flex flex-wrap justify-content-evenly"> 
        <CardComp title="FLOPPY" description="100 points" alertDesc="Using the Credentias from the letter, you logged into the Foobanizer 9000-PC. It has a floppy drive... why? There is an .ico file on the disk, but it doesnt smell right... " hintUrl="https://drive.usercontent.google.com/download?id=1v2p3Yx1LgG3myqPvsgJSb7sbJDrXFxnL&export=download&authuser=0" correctAnswer="Sample Answer 1" />
        <CardComp title="Question 2" description="Description 2" hintUrl="https://docs.google.com/document/d/1K9Q9bUpYSKDVlScTvG2ppfox3ImB976c/edit?usp=sharing&ouid=110847124714844377781&rtpof=true&sd=true" />
        <CardComp title="Question 3" description="Description 3" hintUrl="https://drive.google.com/file/d/1riESpeobJPOFHWlSWhYlvEWZ0yE5rIlx/view?usp=sharing" />
      </div>
      <h3 className='heading'>FORENSICS</h3>
      <div className="d-flex flex-wrap justify-content-evenly" id='card'> 
        <CardComp title="Quesion 4" description="Description 4" />
        <CardComp title="Quesion 5" description="Description 5" />
        <CardComp title="Quesion 6" description="Description 6" />
        <CardComp title="Quesion 7" description="Description 7" />
       

      </div>
      <h3 className='heading'>WEB</h3>
      <div className="d-flex flex-wrap justify-content-evenly" id='card'> 
        <CardComp title="Quesion 8" description="Description 8" />
        <CardComp title="Quesion 9" description="Description 9" />
      </div>
      <h3 className='heading'>OSINT</h3>
      <div className="d-flex flex-wrap justify-content-evenly" id='card'> 
        <CardComp title="Quesion 10" description="Description 10" />
        <CardComp title="Quesion 11" description="Description 11" />
        <CardComp title="Quesion 12" description="Description 12" />      </div>
    </div>
  );
}

export default Page2;