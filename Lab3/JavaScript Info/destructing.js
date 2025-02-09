let user = {
    name: "John",
    years: 30
  };
  
  let {namee, years: age, isAdmin = false} = user;
  
  alert( namee ); // John
  alert( age ); // 30
  alert( isAdmin ); // false