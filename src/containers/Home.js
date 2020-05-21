import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceList from "./../components/PriceList";
import ViewTab from "./../components/ViewTab";
import {
  LIST_VIEW,
  TYPE_OUTCOME,
  parseToYearAndMonth,
  CHART_VIEW,
  padLeft,
} from "./../utility";
import MonthPicker from "./../components/MonthPicker";
import CreateBtn from "./../components/CreateBtn";
import TotalPrice from "./../components/TotalPrice";

export const categorys = {
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
  },
};

export const items = [
  {
    id: 1,
    title: "去云南旅游",
    price: 200,
    date: "2020-05-10",
    cid: "1",
  },
  {
    id: 2,
    title: "炒股",
    price: 300,
    date: "2020-05-10",
    cid: "2",
  },
];

const newItem = {
  id: 4,
  title: "新添加的项目",
  price: 300,
  date: "2020-04-10",
  cid: "1",
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW,
    };
  }
  changeView = (view) => {
    this.setState({
      tabView: view,
    });
  };
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month },
    });
  };
  modifyItem = (modifiedItem) => {
    const modifiedItems = this.state.items.map((item) => {
      if (item.id === modifiedItem.id) {
        return { ...item, title: "更新后的标题" };
      } else {
        return item;
      }
    });
    this.setState({
      items: modifiedItems,
    });
  };
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items],
    });
  };
  deleteItem = (deletedItem) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== deletedItem.id;
    });
    this.setState({
      items: filteredItems,
    });
  };
  render() {
    const { items, currentDate, tabView } = this.state;
    const itemsWithCategory = items
      .map((item) => {
        item.category = categorys[item.cid];
        return item;
      })
      .filter((item) => {
        return item.date.includes(
          `${currentDate.year}-${padLeft(currentDate.month)}`
        );
      });
    console.log(itemsWithCategory);
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
                onChange={this.changeDate}
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
          <ViewTab activeTab={tabView} onTabChange={this.changeView}></ViewTab>
          <CreateBtn onClick={this.createItem}></CreateBtn>
          {tabView === LIST_VIEW && (
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            ></PriceList>
          )}
          {tabView === CHART_VIEW && <h1>这里是图表</h1>}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
