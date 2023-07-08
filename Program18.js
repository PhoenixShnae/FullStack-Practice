        function IsPrime(){
                let a=document.getElementById('InputNumber').value;
            if(a==1||a==0){
                document.getElementById('TextOut').innerHTML="Number is not Prime";
                return false;
            }
            else if(a>2){
                for(let i=2;i<a/2;i++){
                    if(a%i==0){
                document.getElementById('TextOut').innerHTML="Number is not Prime";
                return false;
                    }
                }
            }
                document.getElementById('TextOut').innerHTML="Number is Prime.";
                return true;
        }