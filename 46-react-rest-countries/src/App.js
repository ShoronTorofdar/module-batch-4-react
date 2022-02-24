import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
  <div className='App'>
  <h1 className='header-style'>Allah is great</h1>
  <Countries/>
  </div>
  );
}
export default App;









































// function Countries(){
// const [countries, setCountries] = useState([]);
// useEffect(() => {
//   fetch('https://restcountries.com/v2/all')
//   .then(response => response.json())
//   .then(data => setCountries(data))
// }, []);


//   return(
//     <div className='text'>
//       <h1>Countries</h1>
//       <h2>Traveling around the World</h2>
//      <h3>Countries Available: {countries.length}</h3>
//      {
//        countries.map(country => <Country name={country.name} capital ={country.capital} population = {country.population}></Country>)
//      }
//     </div>
//   )
// }

// function Country (props){
//   return(
//     <div className='text country'>
//       <h1>Country</h1>
//       <h2>Name: {props.name}</h2>
//       <h2>Capital: {props.capital}</h2>
//       <h2>Population: {props.population}</h2>
//     </div>
//   )
// }