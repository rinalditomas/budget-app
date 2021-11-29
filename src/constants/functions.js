// const addNewItem = async (e) => {
//   e.preventDefault();
//   console.log(input.amount, input.category, input.notes);
//   let item = {
//     income: false,
//     amount: input.amount,
//     category: input.category,
//     notes: input.notes,
//     date: Date.now(),
//   };

//   await setDoc(doc(db, "expenses", "gastos"), { item });
// };

export const ExpensesCategories = ({handleChange}) => {
  return (
    <>
      <div className="logo-container" name='category' value= 'Home'onClick={handleChange}>
        <i className="fas fa-home" name='category' value= 'Home' ></i>
        <p name='category' value= 'Home'>Home</p>
      </div>
      <div className="logo-container" name='category' value= 'Car'onClick={handleChange}>
        <i className="fas fa-car" name='category' value= 'Car'></i>
        <p name='category' value= 'Car'>Car</p>
      </div>
      <div className="logo-container" name='category' value= 'Supermarket'onClick={handleChange}>
        <i className="fas fa-shopping-cart" name='category' value= 'Supermarket' ></i>
        <p name='category' value= 'Supermarket' >Supermarket</p>
      </div>
      <div className="logo-container"name='category' value= 'Out'onClick={handleChange}>
        <i className="fas fa-cocktail" name='category' value= 'Out'></i>
        <p name='category' value= 'Out'>Out</p>
      </div>
      <div className="logo-container"name='category' value= 'Health'onClick={handleChange}>
        <i className="fas fa-heartbeat" name='category' value= 'Health'></i>
        <p name='category' value= 'Health'>Health</p>
      </div>
      <div className="logo-container"name='category' value= 'Shopping'onClick={handleChange}>
        <i className="fas fa-tags" name='category' value= 'Shopping'></i>
        <p name='category' value= 'Shopping'>Shopping</p>
      </div>

      <div className="logo-container"name='category' value= 'Trips'onClick={handleChange}>
        <i className="fas fa-plane-departure" name='category' value= 'Trips'></i>
        <p name='category' value= 'Trips'>Trips</p>
      </div>
    </>
  );
};
export const IncomeCategories = ({handleChange}) => {
  return (
    <>
      <div className="logo-container"name='category' value= 'Salarie'onClick={handleChange}>
        <i className="fas fa-coins"name='category' value= 'Salarie'></i>
        <p name='category' value= 'Salarie'>Salarie</p>
      </div>
      <div className="logo-container" name='category' value= 'Investmen' onClick={handleChange}>
        <i className="fab fa-bitcoin" name='category' value= 'Investmen'></i>
        <p name='category' value= 'Investmen'>Investment</p>
      </div>
      <div className="logo-container" name='category' value= 'Side-hustle' onClick={handleChange}>
        <i className="fas fa-laptop-code" name='category' value= 'Side-hustle'></i>
        <p name='category' value= 'Side-hustle'>Side hustle</p>
      </div>
    </>
  );
};
