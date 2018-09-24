const doMath = (event) => {
    event.preventDefault()
    let operation = getRadioVal(document.getElementById('calc'), 'op')
    let print = "Result";
    const valueOne = Number.parseFloat(document.getElementById('val1').value)
    const valueTwo = Number.parseFloat(document.getElementById('val2').value)
    
    switch(operation){
        case '+':
            print = "Add"
            if(valueOne & valueTwo){
                print = valueOne + valueTwo
            }
            break;
        case '-':
            print = "Subtract"
            if(valueOne & valueTwo){
                print = valueOne - valueTwo
            }
            break;
        case '*':
            print = "Multiply"
            if(valueOne & valueTwo){
                print = valueOne * valueTwo
            }
            break;
        case '|':
            print = "Divide"
            if(valueOne & valueTwo){
                print = valueOne / valueTwo
            }
            break;
    }
    document.getElementById('result').innerHTML = print
} 

const getRadioVal = (form, name) => {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}
