// FORM ONE

const formOne = document.querySelector("#formOne")
const alertText = document.querySelector("#alert-text")
const submit = document.querySelector("#submit")

formOne.addEventListener('submit', e => {

    e.preventDefault()
    alert(alertText.value)
    alertText.value = ""

})

// FORM TWO

const formTwo = document.querySelector("#formTwo")
const whiteBread = document.querySelector("#whiteBread")
const wheatBread = document.querySelector("#wheatBread")
const lettuce = document.querySelector("#lettuce")
const pickle = document.querySelector("#pickle")
const onion = document.querySelector("#onion")
const tomato = document.querySelector("#tomato")
const ketchup = document.querySelector("#ketchup")
const mayonnaise = document.querySelector("#mayonnaise")
const mustard = document.querySelector("#mustard")
const peppers = document.querySelector("#peppers")

formTwo.addEventListener('submit', e => {

    e.preventDefault()

    let str = "Your sandwich contains: "

    if(whiteBread.checked) {
        str += "White Bread, "
    }
    if(wheatBread.checked) {
        str += "Wheat Bread, "
    }
    if(lettuce.checked) {
        str += "Lettuce, "
    }
    if(pickle.checked) {
        str += "Pickle, "
    }
    if(onion.checked) {
        str += "Onion, "
    }
    if(tomato.checked) {
        str += "Tomato, "
    }
    if(ketchup.checked) {
        str += "Ketchup, "
    }
    if(mayonnaise.checked) {
        str += "Mayonnaise, "
    }
    if(mustard.checked) {
        str += "Mustard, "
    }
    if(peppers.checked) {
        str += "Peppers,  "
    }

    alert(str)

    whiteBread.checked = false
    wheatBread.checked = false
    lettuce.checked = false
    pickle.checked = false
    onion.checked = false
    tomato.checked = false
    ketchup.checked = false
    mayonnaise.checked = false
    mustard.checked = false
    peppers.checked = false
    
})

// FORM THREE

const formThree = document.querySelector("#formThree")
const date = document.querySelector("#date")
const stylist = document.querySelector("#stylist")
const long = document.querySelector("#long")
const short = document.querySelector("#short")

formThree.addEventListener('submit', e => {

    e.preventDefault()

    let str = `You scheduled a haircut on ${date.value}, with your stylist as ${stylist.value}, you indicated you have `

    if(long.checked) {
        str += "long hair."
    }
    if(short.checked) {
        str += "short hair."
    }

    alert(str)

    date.value = ""
    stylist.value = ""
    long.checked = false
    short.checked = false

})

// FORM FOUR

const formFour = document.querySelector("#formFour")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")

formFour.addEventListener('submit', e => {

    e.preventDefault()

    let str = `Username : ${username.value} \n Email : ${email.value}`

    alert(str)

    username.value = ""
    email.value = ""
    password.value = ""
    confirmPassword.value = ""

})