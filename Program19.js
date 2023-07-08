
        function IsArmstrong(){
                let a=document.getElementById('InputNumber').value;
                let b = a.length;
                let sum = 0;
                let temp = a;
                while (temp > 0) {
                    let remainder = temp % 10;
                    sum += remainder ** b;
                    temp = parseInt(temp / 10);
                }
                if (sum==a){     
                    alert("Number is an Armstrong");
                }
                else{                   
                    alert("Number is not Armstrong");
                }
        }