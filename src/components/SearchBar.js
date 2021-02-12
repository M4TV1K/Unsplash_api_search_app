import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  }
  
  onFormSubmit = (event) => { /*or we can make arrow function that automatically binds "this"*/
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
        <div className="ui segment">                                              {/*to access state obviously inside*/}
          <form onSubmit={this.onFormSubmit} className="ui form"> {/*TODO COULD BE this.onFormSubmit.bind(this)*/}
            <div className="field">
              <label htmlFor="search">Image Search</label>
              <input id="search" type="text"
                     value={this.state.term}
                     onChange={e => {this.setState({term: e.target.value})}}
              />
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;