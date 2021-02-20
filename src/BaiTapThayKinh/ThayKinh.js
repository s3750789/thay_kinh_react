import React, { Component } from "react";

export default class ThayKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  // Gia tri luu tru state nen dat la nguyen 1object de khi render detail e co the su dung lai
  state = {
      xemChitiet:{
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      }
    // id: 1,
  };

  changeGlasses = (itemCl) => {
      console.log(itemCl)
    this.setState({
      xemChitiet: itemCl,
    });
  };

  renderGlasses = () => {
    const arrTagGlasses = this.arrProduct.map((kinh, index) => {
      return (
        <div style={{
            cursor:"pointer"
        }}
         key={index} className="col-2">
          <img
            onClick={() => this.changeGlasses(kinh)}
            width="150"
            className="border border-primary"
            src={kinh.url}
            alt={kinh.url}
          />
        </div>
      );
    });
    return arrTagGlasses;
  };

  renderModel = () => {
    const product = this.arrProduct.find(
      (glassess) => glassess.id === this.state.id
    );

    return (
      <div className="col-4">
        <div
          className="text-white bg-primary"
          style={{
            position: "relative",
            backgroundImage: `url(./glassesImage/model.jpg)`,
            backgroundSize: "cover",
            height: "550px",
            width: "450px",
          }}
        ></div>

        <div style={{
             position: "absolute", 
             top: "25%", 
             left: "28%", 
             width: "50",
             }}>
          <img style={{ opacity: 0.8 }} width="100%" src={this.state.xemChitiet.url} alt />
        </div>

        <div
          className="mt-5"
          style=
          {{ 
              backgroundColor: "rgba(250, 190, 88, 0.7)" ,
              position: "absolute", 
                bottom: "0", 
                width : "100%"
            }
        }
        >
          <p className="text-left text-primary ">{this.state.xemChitiet.name}</p>
          <p className="text-left text-white">{this.state.xemChitiet.desc}</p>
        </div>

      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderModel()}</div>

        <div className="row p-5" style={{ backgroundColor: "white" }}>
          {this.renderGlasses()}
        </div>
      </div>
    );
  }
}
