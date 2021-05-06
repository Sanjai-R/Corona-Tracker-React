import {Cards,Charts,CountryPicker} from "./Components/";
import styles from"./App.modules.css"
import react from 'react'
import {fetchData} from "./api"


import image from './Images/logo.png';
class App extends react.Component {

  state = {
    data : {},
    country: ""
  }
  handleCountryChange = async (country)=>{
    const  fetchedData = await fetchData(country)
    this.setState({data:fetchedData})
    console.log(fetchData)
  }
  async componentDidMount () {
    const  fetchedData = await fetchData()
    this.setState({data:fetchedData})
   
  }
render() {
  const {data ,country} = this.state;
  
  return (
    <div className="container">
       <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />    
      <CountryPicker handleCountryChange ={this.handleCountryChange}/>
      <Charts data = {data} country = {country}/>
    </div>
  );
}
}


export default App;
