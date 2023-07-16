
// FOLLOWING ARE THE NECESSARY VARIABLES AND ARRAY 

let toyRoy = [];
let totalQuantity = 0;
let totalAmount = 0;
let srNoCounter = 0;

const selectToy = (id) => {
  // ENABLING THE OUTPUT SCREEN
  document.querySelector(".bill-book").style.display = "flex";

  // HERE WE ARE UPDATING THE QUANTITY, TOTAL QUANTITY, AND TOTAL AMOUNT IF ROW IS CREATING ON THE OUTPUT SCREEN
  if (toyRoy[id] != undefined) {
    toyRoy[id].quantity.textContent = Number(toyRoy[id].quantity.textContent) + 1;

    toyRoy[id].price.textContent = `${Toydata[id].toyPrice} * ${toyRoy[id].quantity.textContent} = ${
      Number(Toydata[id].toyPrice) * Number(toyRoy[id].quantity.textContent)
    }`;

    totalQuantity += 1;
    totalAmount += Number(Toydata[id].toyPrice);

    document.querySelector(".Total-quantity").innerHTML = `Total Quantity : <span>${totalQuantity}</span>`;
    document.querySelector(".Total-amount").innerHTML = `Total amount : <span>\u20B9${totalAmount}</span>`;

    return undefined;
  }

  // HERE WHEN YOU CLICK ON ADD TO CART BUTTON CREATE CART !!
  // Creating div
  toyRoy[id] = document.createElement("div");
  toyRoy[id].classList.add("creating-content");

  document.querySelector(".price-content").appendChild(toyRoy[id]);

  // Adding srno.
  toyRoy[id].srno = document.createElement("h3");
  toyRoy[id].srno.textContent = srNoCounter + 1;
  toyRoy[id].appendChild(toyRoy[id].srno);

  // Adding image
  toyRoy[id].toyImg = document.createElement("img");
  toyRoy[id].toyImg.src = Toydata[id].toyImg;
  toyRoy[id].appendChild(toyRoy[id].toyImg);

  // Adding toy name
  toyRoy[id].toyName = document.createElement("h3");
  toyRoy[id].toyName.textContent = Toydata[id].toyName;
  toyRoy[id].appendChild(toyRoy[id].toyName);

  // Adding quantity
  toyRoy[id].quantity = document.createElement("h3");
  toyRoy[id].quantity.textContent = 1;
  toyRoy[id].appendChild(toyRoy[id].quantity);

  // Adding price
  toyRoy[id].price = document.createElement("h3");
  toyRoy[id].price.textContent = `${Toydata[id].toyPrice} * ${toyRoy[id].quantity.textContent} = ${
    Number(Toydata[id].toyPrice) * Number(toyRoy[id].quantity.textContent)
  }`;
  toyRoy[id].appendChild(toyRoy[id].price);

  // Separating by horizontal line
  toyRoy[id].hr = document.createElement("hr");
  document.querySelector(".price-content").appendChild(toyRoy[id].hr);

  // Calculating total quantity and total price
  totalQuantity += 1;
  totalAmount += Number(Toydata[id].toyPrice);
  document.querySelector(".Total-quantity").innerHTML = `Total Quantity : <span>${totalQuantity}</span>`;
  document.querySelector(".Total-amount").innerHTML = `Total amount : <span>\u20B9${totalAmount}</span>`;

  srNoCounter++;
};

// FOLLOWING ARE THE OBJECTS FROM WHERE I'M TAKING TOY PRICE AND TOY IMAGES

const Toydata = [
  {
    toyName: "Cube Solver",
    toyPrice: "100",
    toyImg: "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&",
  },
  {
    toyName: "pikachu",
    toyPrice: "500",
    toyImg: "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "aeroplane-toy",
    toyPrice: "700",
    toyImg: "https://images.pexels.com/photos/346804/pexels-photo-346804.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "Car-toy",
    toyPrice: "300",
    toyImg: "https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "toy",
    toyPrice: "400",
    toyImg: "https://images.pexels.com/photos/209679/pexels-photo-209679.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "doll",
    toyPrice: "600",
    toyImg: "https://images.pexels.com/photos/54278/pexels-photo-54278.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "Train-toy",
    toyPrice: "1000",
    toyImg: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "Bus-toy",
    toyPrice: "1100",
    toyImg: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "Clack",
    toyPrice: "1200",
    toyImg: "https://images.pexels.com/photos/3661243/pexels-photo-3661243.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    toyName: "Keychain",
    toyPrice: "1300",
    toyImg: "https://images.pexels.com/photos/368736/pexels-photo-368736.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

