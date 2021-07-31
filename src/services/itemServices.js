import axios from "axios";
/*var data = [
  {
    _id: "1284566a9as5d8f121",
    title: "Backpack - Vanellope",
    description: "This is a description of a product",
    image: "img_1.PNG",
    price: 12.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f12111",
    title: "Funko - Vanellope",
    description: "This is a description of a product",
    image: "img_111.jpg",
    price: 12.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f122",
    title: "Backpack - Cheshire Cat",
    description: "This is a description of a product",
    image: "img_2.PNG",
    price: 13.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f122222",
    title: "Funko - Cheshire Cat",
    description: "This is a description of a product",
    image: "img_222.png",
    price: 13.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1222",
    title: "Wallet - Cheshire Cat",
    description: "This is a description of a product",
    image: "img_22.PNG",
    price: 13.33,
    category: "Wallet",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f123",
    title: "Backpack - Aliens",
    image: "img_3.png",
    description: "This is a description of a product",
    price: 14.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f123333",
    title: "Funko - Aliens",
    image: "img_333.png",
    description: "This is a description of a product",
    price: 14.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1233",
    title: "Wallet - Aliens",
    image: "img_33.png",
    description: "This is a description of a product",
    price: 14.33,
    category: "Wallet",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f12444",
    title: "Funko - Hades",
    description: "This is a description of a product",
    image: "img_444.jpg",
    price: 122.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1244",
    title: "Wallet - Hades",
    description: "This is a description of a product",
    image: "img_44.png",
    price: 122.33,
    category: "Wallet",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f125",
    title: "Backpack - Scar",
    description: "This is a description of a product",
    image: "img_5.PNG",
    price: 122.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f125555",
    title: "Funko - Scar",
    description: "This is a description of a product",
    image: "img_555.png",
    price: 122.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1255",
    title: "Wallet - Scar",
    description: "This is a description of a product",
    image: "img_55.png",
    price: 122.33,
    category: "Wallet",
    discount: 5,
  },
];*/

class ItemService {
  async getCatalog() {
    // logic to connect to a server a retrieve the list items
    // URL: http://127.0.0.1:5000/api/catalog POST
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");

    return response.data;
    // return data;
  }

  // method to validate a coupon code
  async validateCode(code) {
    let response = await axios.get(
      "http://127.0.0.1:5000/api/discountCode/" + code
    );
    return response.data;
  }

  // sends completed orders to backend
  async placeOrder(order) {
    let response = await axios.post("http://127.0.0.1:5000/api/order", order);
    return response.data;
  }

  // method to save a product on the server
  // "http;//127.0.0.1/api/catalog" POST
  async saveItem(item) {
    let response = await axios.post("http://127.0.0.1:5000/api/catalog", item);
    let newItem = response.data;
    // hot fix: add and id if missing
    // TODO: ensure server always returns an ID
    if (!newItem._id) {
      newItem._id = Math.random().toString();
    }
    console.log("Save Item: ", newItem);
    return newItem;
  }

  // method to get the categories from the server
  // http://127.0.0.1:5000/api/catalog GET
  async getCategories() {
    // logic to connect to a server a retrieve the list items
    // URL: http://127.0.0.1:5000/api/catalog POST
    let response = await axios.get("http://127.0.0.1:5000/api/categories");
    console.log("Response: ", response.data);
    return response.data;
    // return data;
  }

  getStock(itemId) {}

  getItemprice(coupon) {}
}

export default ItemService;
