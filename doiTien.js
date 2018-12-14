function doi() {
    var amount = document.getElementById('amount').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    // USD => VND
    if (from == 'USD' && to == 'VND') {
        var area = amount * 23000;
        alert(" " + area);
    }
    else { // USD => USD
    if (from =='USD' && to =='USD') {
        var area = amount;
        alert(area);
    }
        else { // VND => USD
            if (from == 'VND' && to == 'USD'){
                var area = amount/23000;
                alert(" " + area);
            }
            else { // VND => VND
                var area  = amount
                alert(area);
            }
        }
    }
}