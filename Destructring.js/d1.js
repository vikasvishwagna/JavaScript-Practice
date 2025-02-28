const employeeDetails = {
  firstName : "Rachin",
  lastName : "Ravindra",
  country : "Newzeland",
  profssion : "cricketr",
  jersyNumber : 53,
}

// console.log(`${employeeDetails.firstName},
//   ${employeeDetails.lastName},
//   ${employeeDetails.jersyNumber}`);// this is a hard way to write

  const {
    firstName,
    lastName,
    jersyNumber,
    country,
    profssion

  } = employeeDetails;

  console.log(`firstName,lastName, jersyNumber, country,profssion`);