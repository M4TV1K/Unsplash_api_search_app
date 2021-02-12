import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    /*.then((response) => { WE COULD REFER AS PROMISE, BUT
      console.log(response.data.results);
    });*/
    // OR WE CAN ASSIGN this promise to RESPONSE using keyword await but the function should be async!

    this.setState({
      images: response.data.results
    });
  }

  render() {
    return (
        <div className="ui container" style={{marginTop: "5px"}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
    );
  }
}

export default App;