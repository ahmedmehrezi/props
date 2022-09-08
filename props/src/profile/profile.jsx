import React from 'react'
import PropTypes from "prop-types";
import '../App.css';

function Profile(props) {
  console.log(props)
  return (

    <div className='opp'>
        <div className='img2p'>
          <img src={props.img2} className="img2"/>
        </div><br></br>
        <div className='op'>
        <img src={props.img} className="img"/>
        <div className='op2'>
          <h3>{props.fullname}</h3>
          <p>{props.bio}</p>
          <p>{props.profession}</p>
        </div>
        <button className='btn1'>Modifier le profil</button>
        </div>
        <HandleName name={props.fullname} />
        
    </div>
  )

  function HandleName({name}) {
    alert (name) 
  }
}
export default Profile

  Profile.defaultProps = {
    fullname:"No name",
    bio:"No bio",
    profession:"No profession",
    img:"https://image.shutterstock.com/z/stock-vector-anonymous-vector-icon-incognito-sign-privacy-concept-human-head-with-glitch-face-personal-data-1850222983.jpg"
  }


  Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    img:PropTypes.string,
    img2:PropTypes.string
}
