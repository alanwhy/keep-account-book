import React from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab";
import { LIST_VIEW } from "./utility";

const items = [
  {
    id: 1,
    title: "去云南旅游",
    price: 200,
    date: "2018-09-10",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome",
      iconName: "ios-plane",
    },
  },
  {
    id: 2,
    title: "去云南旅游",
    price: 300,
    date: "2018-09-10",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome",
      iconName: "ios-plane",
    },
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ViewTab
          activeTab={LIST_VIEW}
          onTabChange={(view) => {
            console.log(view);
          }}
        ></ViewTab>
        <PriceList
          items={items}
          onModifyItem={(item) => {
            console.log(item.id);
          }}
          onDeleteItem={(item) => {
            console.log(item.id);
          }}
        ></PriceList>
      </div>
    );
  }
}

export default App;
