
//the sidebar
 class Sidebar extends React.Component {
  render() {
      return(
        <div class='sidebar'>
        <p class = 'p1'> Dashboard</p>
        <p class = 'p1'> Widget </p>
        <p class = 'p1'> Reviews </p>
        <p class = 'p1'> Customers </p>
        <p class = 'p1'> Online analysis </p>

        </div>
      )

  }

}
//visitor block
class Visitors extends React.Component {
  render() {
      return(
        <div class='visitor'>
           <p> Visitors </p>
        </div>
      )

  }

}

//analysis block
class Analysis extends React.Component {
  render() {
      return(
        <div class='analysis'>
         <p> Analysis </p>
        </div>
      )

  }

}
//rating block
class Rating extends React.Component {
  render() {
      return(
        <div class='rating'>
        <p> Rating </p>
        </div>
      )

  }

}
// review block
class Review extends React.Component {
  render() {
      return(
        <div class="review">
        <p> Review </p>
        </div>
      )

  }

}


//the header
class Header extends React.Component {
    render() {
        return (
            <h1>Commence Dashboard Creation!</h1>
        )
    }
}
// the border and inside items
class Border extends React.Component {
  render () {
    return (
      <div className='border'>
        <Sidebar />
        <Review />
        <Rating />
        <Analysis />
        <Visitors />

      </div>
    )
  }
}


//main app
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Border />
            </div>
        )
    }
}

// REACT
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
