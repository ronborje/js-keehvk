//Import stylesheets
//import './style.css';
import mockData from './mock_data';

fetch('https://jsonblob.com/api/456479a7-302f-11ea-893e-9d0b7a7dd72d').then(resp => resp.json()).then((data) =>{
const fetchData = data.data;
// Write Javascript code!
const appDiv = document.getElementById('app');

const app = document.getElementById('app');
const ul = document.createElement('ul');

for(const item of fetchData){
const li = document.createElement('li');
li.innerText = item.title

ul.appendChild(li);

}

app.appendChild(ul);
}); 
 
