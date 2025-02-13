async function fetchUsers(){
  try{
    const fetchData = await fetch('https://reqres.in/api/users?page=2');
    const jData = await fetchData.json();
    console.log(jData);
  }
  catch(err){
    console.log(err);
  }
}
fetchUsers();


//method2
fetch('https://reqres.in/api/users?page=2')
.then(function(response){
  return response.json();
}).then(function(data){
  console.log(data);
}).catch(err => console.log(err))