/* Basic calcule */

function capSubscription(value = 0,installments = 1){
    return value / installments;
}

function interestMon(value = 0){
    return value * 0.035;
}

function calcule(){
    let input = document.getElementById("totalValue");
    const totalPurchase = input.value;
    input = document.getElementById("monthlyInstallments");
    const installments = input.value;
    console.log(`The recolected values are: purchase: ${totalPurchase} and ${installments}`);
    const cap = capSubscription(totalPurchase,installments);
    cap.toFixed(3);
    document.getElementById("capitalSubscription").value=cap;
    const interest = parseInt(interestMon(totalPurchase));
    document.getElementById("interest").value=interest;
    totalPayment=interest + cap;
    totalPayment.toFixed(3);
    document.getElementById("monthlyFee").value=totalPayment;
}