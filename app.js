
(()=>{
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = months[new Date().getMonth()];
let year = new Date().getFullYear();
 document.getElementById('time').innerHTML = `${month} ${year}`;
})();

budgetController = {
    Budget: {
        inc: {
            total: 0,
            arr: []
        },
        exp: {
            total: 0,
            arr: []
        },
        total: 0
    },

    budgetSetter: function(objTemp){
        if(objTemp.name == 'inc'){
            this.Budget.inc.arr.push(objTemp);
            this.Budget.total+= parseInt(objTemp.value);
            this.Budget.inc.total += parseInt(objTemp.value);
        }else if(objTemp.name == 'exp'){
            this.Budget.exp.arr.push(objTemp);
            this.Budget.total-= parseInt(objTemp.value);
            this.Budget.exp.total += parseInt(objTemp.value);
        }
    }
    
};

inputController = {
    temp : {
        name: this.name,
        desc: this.desc,
        value: this.value
    },
    budgetGrabber: function(){
        if(document.getElementById('adder').value == 'inc'){
            this.temp.name = 'inc';
        }else if(document.getElementById('adder').value =='exp'){
            this.temp.name = 'exp';
        } 
        this.temp.desc = document.getElementById('desc').value;
        this.temp.value = document.getElementById('amount').value;
        return this.temp;  
    },

}

function displayController(objTemp){
    if(objTemp.name == 'inc'){
    document.getElementsByClassName('income')[0].innerHTML += `<hr class="top-hr"><div class="inc-disp"><p>${objTemp.desc}</p><p>${objTemp.value}</p></div><hr>`;
    }else if(objTemp.name == 'exp'){
    document.getElementsByClassName('expense')[0].innerHTML += `<hr class="top-hr"><div class="exp-disp"><p>${objTemp.desc}</p><p>${objTemp.value}</p></div><hr>`;   
    }
    document.getElementById('total-budget').innerHTML = budgetController.Budget.total;
    document.getElementById('income-display').innerHTML = budgetController.Budget.inc.total;
    document.getElementById('expense-display').innerHTML = budgetController.Budget.exp.total;
};

function controller(){
    document.getElementById('check-m').onclick = ()=>{
        let another = inputController.budgetGrabber();
        budgetController.budgetSetter(another);
        displayController(another);

    }
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            let another = inputController.budgetGrabber();
        budgetController.budgetSetter(another);
        displayController(another);
        }
    });
}

controller();


