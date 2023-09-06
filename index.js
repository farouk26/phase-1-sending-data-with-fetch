// Add your code here
const body = document.querySelector('body');
function submitData(name, email) {
    const data = {
      name: name,
      email: email,
    };
  
    const dataObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
  
    return fetch("http://localhost:3000/users", dataObject)
    .then((res) => res.json())
    .then(({ id }) => (body.innerHTML = id))
    .catch(({ message }) => (body.innerHTML = message));
  }
//   submitData("Farouk", "test@test.com")
//   .then(function (response){
//     console.log("Response:", response);
//     })
//     .catch(function(error){
//         console.log("Error:", error);
//   })
  