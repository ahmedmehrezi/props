import './App.css';
import Profile from './profile/profile';

function App() {
  var data ={
    fullname:"Ahmed Mehrezi" , 
    bio:"17 years old✨",
    profession:"photographe",
    img:"https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/241134388_1142450766285730_1772209600496140097_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=ykYbtTRMpDUAX_LIqbY&_nc_ht=scontent.ftun10-1.fna&oh=00_AT_hi4BObCv0C_RQztfw6nd6ujhiDPTb28pPT8k7HtSajA&oe=631BE302",
    img2:"https://i.imgur.com/sjvtlq0.png"
  }

  return (
    <div className="App"  >
      <Profile fullname={data.fullname} bio={data.bio} profession={data.profession} img={data.img}  img2={data.img2} />
      
    </div>
  );
}

export default App;
