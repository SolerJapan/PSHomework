//default groceries whichever is false will be displayed upon opening
const groceries = [
  {
    item:'Ramune',
    brand:'yusugo',
    units:'2 liters',
    quantity:1,
    isPurchased: false
  },
  {
    item:'Curry',
    brand:'umai',
    units:'3 oz',
    quantity:1,
    isPurchased: false
  },
  {
    item:'Sushi',
    brand:'Nagoya',
    units:'8 oz',
    quantity:1,
    isPurchased: false
  }
]

//main app
class App extends React.Component {
   state = {
     groceries,
     item:"",
     brand:"",
     units:"",
     isPurchased: false
   }
   itemChange = (event) =>{

      this.setState(
     {
       [event.target.id]: event.target.value
     }
   )}

   togglePurchased(){
   if (this.grocery.state.isPurchased =true){
     this.setState = ({
       isPurchased: false
     });
   }
   else{
     this.grocery.setState = ({
       isPurchased: true
     })
   }
}
// submit will not refresh and will input the items that are on the list
   submit = (event) =>{
       event.preventDefault()
console.log("submit");
   const item = {
     item: this.state.item,
     brand: this.state.brand,
     units: this.state.units,
     quantity: 1,
     isPurchased: false

   }



     this.setState(
       {

          groceries: [
            item, ...this.state.groceries
          ],
          item:"",
          brand:"",
          units:"",
          isPurchased: false
       }

     )
   }

   render() {
      return(
     // renders the form
    <div id = "green">
      <h1>Grocery List</h1>
      <form onSubmit= {this.submit}>
        Item<input id ="item" onChange= { this.itemChange} type='text' value = {this.state.item} ></input><br/><br/>
        Brand<input id ="brand" onChange= { this.itemChange} type='text' value = {this.state.brand} ></input><br/><br/>
        Units<input id ="units" onChange= { this.itemChange} type='text' value = {this.state.units} ></input><br/><br/>
        <button>submit </button>
      </form>
      {/* renders list */}
      <div id = "yellow">

         <ul>
           {this.state.groceries.map((grocery) => !grocery.isPurchased ?
             <li>{grocery.item}
             <ul>{grocery.brand}</ul>
             <ul>{grocery.units}</ul>
             <ul><button className="bought-button" onClick={this.togglePurchased}> Remove </button></ul>
             </li> : null)}

         </ul>

      </div>
    </div>
    )

   }
}

// REACT
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
