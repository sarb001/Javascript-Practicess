
var InitialPrice = document.getElementById('initial');
var Quantity = document.getElementById('quantity');
var CurrentPrice = document.getElementById('current');

const SubmitBtn = document.getElementById('btn');
const OutputMessage = document.getElementById('msgbox');


SubmitBtn.addEventListener('click' , (e) => {
    e.preventDefault(); 

    const InitialFirstValue  = Number(InitialPrice.value);
    const FullQuantity       = Number(Quantity.value);
    const CurrentSecondValue = Number(CurrentPrice.value);
    calculateLossandprofit(InitialFirstValue,FullQuantity,CurrentSecondValue);
})

function calculateLossandprofit(initial,quantity,current){
            if(initial > current){
                const loss = (initial - current) * quantity;
                var LossPercentage = (loss / initial) * 100;
                OutputMessage.innerHTML = `Your Total Loss is ${loss} and Loss Percantage is ${LossPercentage}`;
                // loss
            }else if(current > initial){
                const Profit = (current - initial) * quantity;
                var Profitpercantage = (Profit / initial) * 100 ;
                OutputMessage.innerHTML = `Your Total Profit is ${Profit} and Profit Percantage is ${Profitpercantage}`;
                // profilt
            }else {
                OutputMessage.innerHTML = 'No Profit!! Nor Loss!!';
            }
}



