let calculation = JSON.parse(localStorage.getItem('calculation') || '""');

    showCalculation();

    function updateCalculation(value){
      calculation += value;
      showCalculation();
      localStorage.setItem('calculation', JSON.stringify(calculation));
    }

     function saveCalculation() {
          localStorage.setItem('calculation', JSON.stringify(calculation));
        }

        function showCalculation(){
          document.querySelector(".js-calculation").innerHTML = `${calculation}`;
        }