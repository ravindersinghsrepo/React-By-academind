import reactCoreConceptsImg from '../../assets/react-core-concepts.png'
import './Header.css'
const reactDescription = ['Fundamental' , 'Crucial','Core'] ; 

function genRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}
  
export default function Header(){
    return(
      <header>
          <img src={reactCoreConceptsImg} />
          <h1>React Essentials</h1>
          <p>
            {reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    )
}