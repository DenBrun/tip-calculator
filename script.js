let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeople = document.getElementById('numberOfPeople')
let perPersonTotal = document.getElementById('perPersonTotal')

const calculateBill = () => {
  let bill = Number(billTotalInput.value.replace(',', '.'))
  let tip = bill * Number(tipInput.value.replace(',', '.')) * 0.01
  let totalPerson = (bill + tip) / Number(numberOfPeople.innerText)

  if (isNaN(totalPerson)) {
    perPersonTotal.innerText = '$0.00'
  } else {
    perPersonTotal.innerText = '$' + totalPerson.toFixed(2)
  }

}


const increasePeople = () => {
  numberOfPeople.innerText++
  calculateBill()

}


const decreasePeople = () => {
  if (numberOfPeople.innerText != 1) {
    numberOfPeople.innerText--
    calculateBill()
  }
}