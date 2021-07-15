// Show input error message

function showError(id, message) {

    return `${id}: ${message}`;

}



// Show success outline

function showSuccess(id) {

    return `${id} successfully validated!`;

}



// Check email is valid

function checkEmail(id, input) {
    //Default: is valid
    let result ={
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        //Default: is not valid
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}




// Check mobile is valid

function checkMobile(id, input) {

    //Default: is valid
    let result ={
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(0|0041|\+41)?[1-9\s][0-9\s]{1,12}$/;

    if (!re.test(input.trim())) {

        //Default: is not valid
        result ={
            isNotValid: true,
            msg: showError(id, 'Mobile Number is not valid')
        }
    }
    return result;
}



// Check required fields

function checkRequired(id, input) {

    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

        //if input is empty ...
        if (input.trim() === '') {

            //... then it's not valid
            result = {
                isNotValid: true,
                msg: showError(id, `${input.toString()} is required`)
            }
        }
    return result;
    }



// Check input length

function checkLength(id, input, min, max) {

    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    //Default: is not valid
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id, `${id} must be at least ${min} characters!`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id, `${id} must be less then ${max} characters!`)
        }
    }
    return result;

}

// Check passwords match

/*
function checkPassword(id1, input1, id2) {

    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id1)
    }

    //Default: is not valid
    if (id1.trim != id2.trim) {
        result = {
            isNotValid: true,
            msg: showError(id2, `${id1} does not match with ${id2}!`)
        }
    }
    return result;
}

 */

module.exports = {
    checkRequired,
    checkLength,
    checkEmail,
    checkMobile
}

