function check() {
    var value = document.getElementById("Number").value;
    // var res = Math.sign(value);

    if(value > 0) {
        res = `${value} is Positive Number`;

    }else if(value < 0) {
        res = `${value} is Negative Number`;

    }else if (value == 0) {
        res = `${value} is Zero`;

    }else {
        res = `${value} is Not a Number`;
    }

    document.getElementById('res').innerText = res;
}