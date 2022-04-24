//inputs
var giveNameInput = document.querySelector('.borcVeren');
var acceptNameInput = document.querySelector('.borcAlan');
var owInput = document.querySelector('.borcMiqdar');
var giveBorcFaizInput = document.querySelector('.borcFaiz');
// back
var back = 0;
//button
var borcButton = document.querySelector('.button');
//table
var table = document.querySelector('.table');

borcButton.addEventListener('click', () => {
    // Get values
    giveName = giveNameInput.value;
    acceptName = acceptNameInput.value;
    miqdar = owInput.value;
    percent = giveBorcFaizInput.value;

    // sum the percent
    back = (miqdar / 100) * percent;

    // make new elements
    newRow = document.createElement('TR'); 
    colOne = document.createElement('TD');
    colTwo = document.createElement('TD');
    colThree = document.createElement('TD');
    colFour = document.createElement('TD');
    colFive = document.createElement('TD');
    colSix = document.createElement('TD');

    // Add values
    colOne.innerHTML = giveName;
    colTwo.innerHTML = acceptName;
    colThree.innerHTML = miqdar;
    colFour.innerHTML = percent;
    colFive.innerHTML = back;
    colSix.innerHTML = '<span class="fas fa-trash"></span>';

    // Attach TR to table
    table.appendChild(newRow);
    newRow.appendChild(colOne);
    newRow.appendChild(colTwo);
    newRow.appendChild(colThree);
    newRow.appendChild(colFour);
    newRow.appendChild(colFive);
    newRow.appendChild(colSix);
});