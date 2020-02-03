// Add your code here
function submitData(name, email){
  let userData = {
    name: name,
    email: email
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch(url, configObj)
  .then(resp => resp.json())
  .then(object => console.log(object))
  .catch(errors => console.log(errors))
}
