
import './App.css'
import Greeting from './Greeting.jsx' 
import Header from './Header.jsx'
import Content from './Content.jsx'
import Product from './Product.jsx'
import Order from './Order.jsx'
import StudentCard from './StudentCard.jsx'
import UserProfile from './UserProfile.jsx'
import StudentList from './StudentList.jsx'
import CounterButton from './CounterButton.jsx'
import StudentInput from './StudentInput.jsx'
function App() {
 return ( 
  <>
  {/* <Greeting></Greeting>
  <Header></Header> 
  <Content></Content>
  <Product name="Laptop" price="60000"/>  
  <Product name="KEyboard" price="3000"/>
  <Order/>
  <StudentCard name="Zahid" department="CSE" semester="1"/>
  <UserProfile name="Zahid" role="Student" IsOnline={true} IsAdmin={true}/>
  <UserProfile name="Ahmed" role="Teacher" IsOnline={true} IsAdmin={false}/>

  <StudentList/> */}
<CounterButton/>


<StudentInput/>
  </>
  );
}

export default App
