import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceList from "./../components/PriceList";
import ViewTab from "./../components/ViewTab";
import { LIST_VIEW, TYPE_OUTCOME } from "./../utility";
import MonthPicker from "./../components/MonthPicker";
import CreateBtn from "./../components/CreateBtn";
import TotalPrice from "./../components/TotalPrice";

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

class Home extends React.Component {
  render() {
    let totalIncome = 0;
    let totalOutcome = 0;
    items.forEach((item) => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price;
      } else {
        totalIncome += item.price;
      }
    });
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="row mb-5 ml-2">账本</div>
          <div className="row">
            <div className="col">
              <MonthPicker
                year={2018}
                month={5}
                onChange={() => {}}
              ></MonthPicker>
            </div>
            <div className="col">
              <TotalPrice
                income={totalIncome}
                outcome={totalOutcome}
              ></TotalPrice>
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab activeTab={LIST_VIEW} onTabChange={() => {}}></ViewTab>
          <CreateBtn onClick={() => {}}></CreateBtn>
          <PriceList
            items={items}
            onModifyItem={() => {}}
            onDeleteItem={() => {}}
          ></PriceList>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
