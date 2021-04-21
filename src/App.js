import React, { Component } from "react";
import FoodContainer from "./components/FoodContainer";
import "./App.css";
import DeciderBox from "./components/DeciderBox";
import Header from "./containers/Header";

const baseUrl = "http://localhost:3000/foods/";
export default class App extends Component {
  state = {
    toggle: true,
    foods: [],
    foodCart: [],
    randomFood: {},
  };

  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(foods => {
        this.setState({
          foods,
        });
      });
  }

  foodTypeList = () => {
    const list = this.state.foods.map(
      food => food.foodType
    )
    let uniqueList = list.filter(
      (c,index) => {
        return list.indexOf(c) === index
      }
    )
    return uniqueList.map(foodItem => <option value={foodItem} key={foodItem}>{foodItem}</option>) 
  }

  handleClick = () => {
<<<<<<< HEAD
    const fave = this.pickRandom(this.state.foodCart);
    this.setState({
      randomFood: fave,
    });
  };

  pickRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
=======
    const fave = this.pickRandom(this.state.foodCart)
    this.setState ({
      randomFood:fave
    })
    this.foodTypeList(this.state.foods)
  }

  pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }
>>>>>>> 8a59c400bbdfa0e34301adc0fbc7960db4c8d694

  addToFoodCart = foodItem => {
    const inCart = this.state.foodCart.find(food => food.id === foodItem.id);
    if (!inCart) {
      this.setState({ foodCart: [...this.state.foodCart, foodItem] });
    }
  };

  removeFromFoodCart = foodItem => {
    const inCart = this.state.foodCart.filter(food => foodItem !== food);
    this.setState({
      foodCart: inCart,
    });
  };

  toggleState = () => this.setState({ toggle: !this.state.toggle });
  render() {
    return (
      <div className='App'>
<<<<<<< HEAD
        <Header
          randomFood={this.state.randomFood}
          handleClick={this.handleClick}
          toggleState={this.toggleState}
          toggle={this.state.toggle}
        />
        {!this.state.toggle ? (
          <DeciderBox
            foodCart={this.state.foodCart}
            clickAction={this.removeFromFoodCart}
            randomFood={this.state.randomFood}
=======
        <Header 
          randomFood={this.state.randomFood}
          foodTypeList={this.foodTypeList} 
          handleClick={this.handleClick} 
          toggleState={this.toggleState} 
          toggle={this.state.toggle} />        
          {!this.state.toggle ? (
        <DeciderBox 
          foodCart={this.state.foodCart}
          clickAction = {this.removeFromFoodCart} 
          randomFood = {this.state.randomFood}
>>>>>>> 8a59c400bbdfa0e34301adc0fbc7960db4c8d694
          />
        ) : (
          <FoodContainer
            clickAction={this.addToFoodCart}
            foods={this.state.foods}
            foodCart={this.state.foodCart}
          />
        )}
      </div>
    );
  }
}
