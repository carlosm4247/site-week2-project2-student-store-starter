import * as React from "react"
import "./Categories.css"
import CategoryButton from "../CategoryButton/CategoryButton";

export default function Categories({currentCategory, categoryClicked}) {

  const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"];


  return (
    <div className="categories">
        {categories.map( (category) => {
          const isCategoryActive = category === currentCategory ? true : false;

          return (<CategoryButton 
                    key = {category}
                    label={category}
                    isActive = {isCategoryActive}
                    categoryClicked={ () => {
                      console.log(`Selected ${category}`)
                      categoryClicked(category);
                      
                    } }
                    />)
        })}
    </div>
  )
}