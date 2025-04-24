import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Item Browser</h1> */}
       
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetail} />
       
      </div>
    </Router>
  );
}

export default App;
