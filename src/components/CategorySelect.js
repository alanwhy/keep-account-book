import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";

class CategorySelect extends React.Component {
  selectCategory = (event, category) => {
    this.props.onSelectCategory(category);
    event.preventDefault();
  };
  render() {
    const { categories, selectedCategory } = this.props;
    const selectedCategoryId = selectedCategory && selectedCategory.id;
    return (
      <div className="category-select-component">
        <div className="row">
          {categories.map((category, index) => {
            const activeClassName =
              selectedCategoryId === category.id
                ? "category-item col-3 active"
                : "category-item col-3";
            return (
              <div
                className={activeClassName}
                key={index}
                onClick={(event) => {
                  this.selectCategory(event, category);
                }}
              >
                <Ionicon
                  className="rounded-circle"
                  fontSize="50px"
                  color="#555"
                  icon={category.iconName}
                ></Ionicon>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

CategorySelect.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.object,
  onSelectCategory: PropTypes.func.isRequired,
};
export default CategorySelect;
