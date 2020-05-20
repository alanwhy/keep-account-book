import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceList from "./../components/PriceList";
import ViewTab from "./../components/ViewTab";
import { LIST_VIEW, TYPE_OUTCOME, parseToYearAndMonth } from "./../utility";
import MonthPicker from "./../components/MonthPicker";
import CreateBtn from "./../components/CreateBtn";
import TotalPrice from "./../components/TotalPrice";

const categorys = {
  "1": {
    id: 1,
    name: "旅行",
    type: "outcome",
    iconName: "ios-plane",
  },
  "2": {
    id: 2,
    name: "理财",
    type: "income",
    iconName: "logo-yen",
  }
}

const items = [
  {
    id: 1,
    title: "去云南旅游",
    price: 200,
    date: "2018-09-10",
    cid: "1"
  },
  {
    id: 2,
    title: "炒股",
    price: 300,
    date: "2018-09-10",
    cid: "2"
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW,
    }
  }
  render() {
    const { items, currentDate, tabView } = this.state
    const itemsWithCategory = items.map(item => {
      item.category = categorys[item.id]
      return item
    })
    let totalIncome = 0;
    let totalOutcome = 0;
    itemsWithCategory.forEach((item) => {
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
                year={currentDate.year}
                month={currentDate.month}
                onChange={() => { }}
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
          <ViewTab activeTab={tabView} onTabChange={() => { }}></ViewTab>
          <CreateBtn onClick={() => { }}></CreateBtn>
          <PriceList
            items={items}
            onModifyItem={() => { }}
            onDeleteItem={() => { }}
          ></PriceList>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
