const URL = "http://localhost:4000/users";
const ul = document.querySelector('ul');
axios.get(URL)
.then(res => {
   let datas = res.data;
   for(let user of datas) {
       const li = document.createElement('li');
       li.textContent = user.firstName + " " + user.lastName;
       ul.appendChild(li);
   }
})
.catch(() => console.error("No data"))