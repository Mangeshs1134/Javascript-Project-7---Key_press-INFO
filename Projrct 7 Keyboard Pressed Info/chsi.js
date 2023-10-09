
window.addEventListener(`keydown`, (e)=>{
const div = document.querySelector(`#div`)
div.innerHTML=`
<table style="width:50% ; height : 200px">
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>

`
})