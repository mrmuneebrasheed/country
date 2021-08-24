import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      countries: [],
    };
  }
  setCountryName(event) {
    this.setState({ search: event.target.value });
  }
  fetchCountry() {
    fetch(`http://localhost:7000/country/${this.state.search}`)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        this.setState({ countries: [] });
        result.map((result) => {
          this.state.countries.push(result);
        });
        this.setState({
          countries: this.state.countries,
        });
      })
      .catch((err) => "Country not found");
  }
  componentDidMount() {
    this.fetchCountry();
  }
  render() {
    return (
      <>
        <div className="col-6 mx-auto my-5 bg-gradient-dark border rounded border-dark text-center">
          <p className="h2 p-3 bg-primary text-white">Countries API</p>
          <input
            className="col-8 p-2 mt-2"
            onChange={this.setCountryName.bind(this)}
            type="text"
            placeholder="Put country, capital or region name"
          ></input>
          <Button onClick={this.fetchCountry.bind(this)}>Search</Button>
          <div
            className="d-flex justify-content-evenly flex-wrap overflow-auto "
            style={{ height: "70vh" }}
          >
            {this.state.countries.map((country) => (
              <Card
                name={country.name}
                capital={country.capital}
                flag={country.flag}
                population={country.population}
                region={country.region}
              ></Card>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default App;
