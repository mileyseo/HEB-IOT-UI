import {itemList} from "../data"

const CannedDriedFood = () => {
  return (
      <div>
          <h1> Canned and Dried Foods </h1>
          {itemList.map((item) => (
              <div key={item.id}>
                  <a>
                      <h3> { item.name } </h3>
                      <h3> {item.section}</h3>
                  </a>
              </div>
          ))}
      </div>
  )
};

export default CannedDriedFood;

