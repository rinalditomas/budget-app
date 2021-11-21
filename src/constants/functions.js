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

export const expensesCategories = () => {
  return (
    <>
      <div className="logo-container">
        <i class="fas fa-home"></i>
        <p>Home</p>
      </div>
      <div className="logo-container">
        <i class="fas fa-car"></i>
        <p>Car</p>
      </div>
      <div className="logo-container">
        <i class="fas fa-shopping-cart"></i>
        <p>Supermarket</p>
      </div>
      <div className="logo-container">
        <i class="fas fa-cocktail"></i>
        <p>Out</p>
      </div>
      <div className="logo-container">
        <i class="fas fa-heartbeat"></i>
        <p>Health</p>
      </div>
      <div className="logo-container">
        <i class="fas fa-tags"></i>
        <p>Shopping</p>
      </div>

      <div className="logo-container">
        <i class="fas fa-plane-departure"></i>
        <p>Trips</p>
      </div>
    </>
  );
};
export const incomeCategories = () => {
  return (
    <>
      <div className="logo-container">
        <i class="fas fa-coins"></i>
        <p>Salarie</p>
      </div>
      <div className="logo-container">
        <i class="fab fa-bitcoin"></i>
        <p>Investment</p>
      </div>
      <div className="logo-container">
        <i class="fas fa-laptop-code"></i>
        <p>Side hustle</p>
      </div>
    </>
  );
};
