

const btn=document.getElementById('add_expense');
btn.addEventListener('click',saveToLoCalStorage);


function saveToLoCalStorage(e){
    e.preventDefault();
var expense_amount=document.getElementById('expense_amount').value;
var description=document.getElementById('description').value;
var category=document.getElementById('category').value;
      let myobj={
          expense_amount,
          description,
          category
      };
  
      let myobj_string=JSON.stringify(myobj);
      
      localStorage.setItem(expense_amount,myobj_string);
      let myobj_object=JSON.parse(myobj_string);
      console.log(myobj_object[expense_amount]);
      Showexpense(myobj_object);
}
function Showexpense(user){
   
    const parentNode=document.getElementById('users');
    const HTML= `<li id="${user.expense_amount}"> <b>Expence Amount:</b> ${user.expense_amount}<b>Description:</b> ${user.description} 
    <b>Category:</b>${user.category}<button onclick=deleteUser('${user.expense_amount}')> Delete Expense</button>
    <button onclick=EditUser('${user.expense_amount}','${user.description}')> Edit Expense</button> 
  
 </li>`;
    
    parentNode.innerHTML=parentNode.innerHTML + HTML;
    
  }
  function deleteUser(expense){
    localStorage.removeItem(expense);
        removeUserFromScreen(expense);
    };
   
   function removeUserFromScreen(entered_amount){
    const parentNode=document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(entered_amount);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
};
 
function EditUser(amount,des){
    var exp_amount=document.getElementById("expense_amount");
    exp_amount.value=amount;
    var descript=document.getElementById("description")
    descript.value=des;
    removeUserFromScreen(amount);
   localStorage.removeItem(amount);

}


