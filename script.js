const meter = 3.281 
const liter = 0.264 
const kilogram = 2.204 
let input = document.getElementById("input-el")

let outputInLength = document.getElementById("length")
let outputInVolume = document.getElementById("volume")
let outputInMass = document.getElementById("mass")

let convertBtn = document.querySelector("button")

convertBtn.addEventListener("click", function convertUnits() {
    const baseValue = input.value

    if (baseValue) {
    convert(baseValue)
    } else {
        return null
    }
})

function convert(input) {
    const lengthInFeet = input * meter
    const lengthInMeter = input / meter

    outputInLength.innerHTML += `
    <div class="result"> ${input} meters = ${lengthInFeet.toFixed(3)} feet | ${input} feet = ${lengthInMeter.toFixed(3)} meters</div>`

    const volumeInGallon = input * liter
    const volumeInLiter = input / liter

    outputInVolume.innerHTML += `
    <div class="result">${input} liter = ${volumeInGallon.toFixed(3)} gallons | ${input} gallons = ${volumeInLiter.toFixed(3)} liter</div>`

    const massInPound = input * kilogram
    const massInKilogram = input / kilogram

    outputInMass.innerHTML += `
    <div class="result">${input} kilos = ${massInPound.toFixed(3)} pounds | ${input} pounds = ${massInKilogram.toFixed(3)} kilos</div>`
}
