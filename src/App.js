// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';
import './App.css';


function App () {

  let [searchField, setSearchField] = useState('')
 let [monsters, setMonsters] = useState([]) 
 let [filteredMonsters,setFilteredMonsters] = useState(monsters)
 console.log('rendered')

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then((users) => setMonsters(users))
    }, []) 
    
    useEffect(() => {
      let newFilteredMonsters = monsters.filter(monster => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })
      setFilteredMonsters (newFilteredMonsters)

    }, [monsters, searchField])


  let onSearchChange = (event) => {
    let searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  } 



  return(
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
onChangeHandler ={onSearchChange}
 placeHolder = 'search monsters'
 className = 'monsters-search-box'
 />
  <CardList monsters = {filteredMonsters}/>

   </div> 
        )
  
}

// <CardList monsters = {filteredMonsters}/>


// class App extends Component{

//   constructor() {
//     super();

// this.state =


//  {
//   monsters: [],
//   searchField : ''
  
// }
// console.log('constructor') 
//   }
 
//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(Response => Response.json())
//     .then((users) => this.setState(() => {
//       return {monsters : users}
//     },
//     ))
//   }

// //   componentDidMount() {
// //    let myAsyncFunction = async () => {
// // let userResponse = await fetch('https://jsonplaceholder.typicode.com/users')

// // let users = await userResponse.json()
// // // this.setState(user => {
// // //   return {monsters : users}
// // // })

// //     }
// //     myAsyncFunction()
// //   }



//   render() {
//     console.log('render')

//     let {monsters, searchField} = this.state;
//     let {onSearchChange} = this

//     let filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });

//     return ( 
//       <div className="App">

// <SearchBox
//  onChangeHandler ={onSearchChange}
//   placeHolder = 'search monsters'
//   className = 'monsters-search-box'
//   />
// <CardList monsters = {filteredMonsters}/>
//           </div> 
//     )
//   }
// }

export default App;


// {filteredMonsters.map(monster => {
//   return <div key={monster.id}>  <h1>{monster.name}</h1></div> ;
// })}


