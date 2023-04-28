const Validate = (event) => {
    let error = 0
    // pick inputs
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let country = document.getElementById("country")
    let town = document.getElementById("town")
    let state = document.getElementById("state");
    let DOB = document.getElementById("dob");
    let zipcode = document.getElementById("zipcode");
    let phone1 = document.getElementById("phone1");
    let phone2 = document.getElementById("phone2");
    let email = document.getElementById("email");
    // let gender = document.getElementById("gender");



    // // pick error sections
    // let firstnameErr = document.getElementById("firstnameErr");
    // let lastnameErr = document.getElementById("lasttnameErr");
    // let countryErr = document.getElementById("countryErr")
    // let townErr = document.getElementById("townErr")
    // let stateErr = document.getElementById("stateErr");
    // let DOBErr = document.getElementById("DOBErr");
    // let zipcodeErr = document.getElementById("zipcodeErr");
    // let phone1Err = document.getElementById("phone1Err");
    // let phone2Err = document.getElementById("phone2Err");
    // let emailErr = document.getElementById("emailErr");
    // let genderErr = document.getElementById("genderErr");



    // validating first name input emptiness
    if (firstname.value == "") {
        firstname.style.border = "2px solid red"


        error++
    }
    // validating first name for minimum length
    else if (firstname.value.length < 2) {
        firstname.style.border = "2px solid red"

        error++
    }
    // validating first name for maximum length
    else if (firstname.value.length > 255) {
        firstname.style.border = "2px solid red"

        error++
    } else {
        firstname.style.border = "2px solid green"

    }


    if (lastname.value == "") {
        lastname.style.border = "2px solid red"


        error++
    }
    // validating first name for minimum length
    else if (lastname.value.length < 2) {
        lastname.style.border = "2px solid red"

        error++
    }
    else if (lastname.value.length > 255) {
        lastname.style.border = "2px solid red"

        error++
    }
    else {
        lastname.style.border = "2px solid green"

    }


    if (DOB.value == "") {
        DOB.style.border = "2px solid red"

      
        error++
    }
    else {
        DOB.style.border = "2px solid green"
        DOBErr.textContent = "";
    }

    // validating last name input emptiness
    if (country.value == "") {
        country.style.border = "2px solid red"


        error++
    } else {
        country.style.border = "2px solid green"

    }


    // unique number validations
    // const unregex = /^AO-([0-9]{3})+$/;
    // const ufregex = /^UF-([0-9]{3})+$/;
    // // const foregex = /^FO-([0-9]{3})+$/
    // if (FOid.value == "") {
    //   FOid.style.border = "2px solid red"
    //   idError.textContent = "Unique number is required";
    //   idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   error++
    //   // } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
    // } else if (!(FOid.value.match(ufregex))) {
    //   FOid.style.border = "2px solid red"
    //   idError.textContent = "Unique number must follow this formart UF-000";
    //   idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   error++
    // } else {
    //   FOid.style.border = "2px solid green"
    //   idError.textContent = "";
    // }

    // gender validations
    if (gender.value == "") {
        gender.style.border = "2px solid red"


        error++
    } else {
        gender.style.border = "2px solid green"

    }

    // contact validations
    if (phone1.value == "") {
        phone1.style.border = "2px solid red"


        error++
    }
    // validating last name for minimum length
    else if (phone1.value.length < 10) {
        phone1.style.border = "2px solid red"


        error++
    } else {
        phone1.style.border = "2px solid green"

    }

    if (phone2.value == "") {
        phone2.style.border = "2px solid red"


        error++
    }
    // validating last name for minimum length
    else if (phone2.value.length < 10) {
        phone2.style.border = "2px solid red"


        error++
    } else {
        phone2.style.border = "2px solid green"

    }


    // email validations
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == "") {
        email.style.border = "2px solid red";

        error++;
    } else if (!email.value.match(emailregex)) {
        email.style.border = "2px solid red"


        error++;
    } else {
        email.style.border = "2px solid green"


    }


    // nin validations
    if (zipcode.value == "") {
        zipcode.style.border = "2px solid red"

        error++
    }

    else if (zipcode.value.length < 13) {
        zipcode.style.border = "2px solid red"

        error++
    } else {
        zipcode.style.border = "2px solid green"

    }


    // activity validations
    if (town.value == "") {
        town.style.border = "2px solid red"

        error++
    }

    else if (town.value.length < 2) {
        town.style.border = "2px solid red"

        error++
    }
    else if (town.value.length > 255) {
        town.style.border = "2px solid red"

        error++
    } else {
        town.style.border = "2px solid green"
      
    }



    // date of registration validations
    if (state.value == "") {
        state.style.border = "2px solid red"


        error++
    }

    else if (state.value.length < 2) {
        state.style.border = "2px solid red"

        error++
    }
    else if (state.value.length > 255) {
        state.style.border = "2px solid red"

        error++

    } else {
        state.style.border = "2px solid green"
       
    }

    if (error > 0) {
        event.preventDefault()
    }
}

