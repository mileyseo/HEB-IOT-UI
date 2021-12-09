import styles from "../styles/Home.module.css";

export default function Pantry() {
  return (
    <div className={styles.container}>
        <h1 className="header"> Pantry </h1>
        <div className="img">
        <div className="box">
        <div className="grouping">
          <button className="button btn1"></button>
          <label className="langDescription" id="btn1">
            Baking Ingredients
          </label>
        </div>
        <div className="grouping">
          <button className="button btn2"></button>
          <label className="langDescription" id="btn2">
            Broth {"&"} Bouillon
          </label>
        </div>
        <div className="grouping">
          <button class="button btn3"></button>
          <label className="langDescription" id="btn3">
            <a href="/canned-dried-food">Canned {"&"} Dried Food</a>
          </label>
        </div>
        <div className="grouping">
          <button className="button btn4"></button>
          <label className="langDescription" id="btn4">
            Cereal {"&"} Breakfast
          </label>
        </div>
        <div className="grouping">
          <button className="button btn5"></button>
          <label className="langDescription" id="btn5">
            Condiments
          </label>
        </div>
        <div className="grouping">
          <button className="button btn6"></button>
          <label className="langDescription" id="btn6">
            Dressing, Oil {"&"} Vinegar
          </label>
        </div>
        <div className="grouping">
          <button className="button btn7"></button>
          <label className="langDescription" id="btn7">
            Jelly {"&"} Jam
          </label>
        </div>
        <div className="grouping">
          <button className="button btn8"></button>
          <label className="langDescription" id="btn8">
            Pantry Meals
          </label>
        </div>
        <div className="grouping">
          <button className="button btn9"></button>
          <label className="langDescription" id="btn9">
            Pasta {"&"} Rice
          </label>
        </div>
        <div className="grouping">
          <button className="button btn10"></button>
          <label className="langDescription" id="btn10">
            Peanut Butter
          </label>
        </div>
        <div className="grouping">
          <button className="button btn11"></button>
          <label className="langDescription" id="btn11">
            Salsa {"&"} Dip
          </label>
        </div>
        <div className="grouping">
          <button className="button btn12"></button>
          <label className="langDescription" id="btn12">
            Sauces {"&"} Marinades
          </label>
        </div>
        <div className="grouping">
          <button className="button btn13"></button>
          <label className="langDescription" id="btn13">
            Snacks {"&"} Candy
          </label>
        </div>
        <div className="grouping">
          <button className="button btn14"></button>
          <label className="langDescription" id="btn14">
            Soups {"&"} Chili
          </label>
        </div>
        <div className="grouping">
          <button className="button btn15"></button>
          <label className="langDescription" id="btn15">
            Spices {"&"} Seasonings
          </label>
        </div>
        <div className="grouping">
          <button className="button btn16"></button>
          <label className="langDescription" id="btn16">
            Sugar {"&"} Sweetners
          </label>
        </div>
      </div>
    </div>
    </div>
  );
  }