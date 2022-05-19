// error validate تعريف متغير الخطا

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var txtError = document.getElementById('txt-error');
var submitError = document.getElementById('submit-error');



// Name error وظيفة خطا الاسم

function validateName() {

    // خانة الاسم سيتم تحزين اي قيمة يتم ادخالها في المتغير هذا

    var name = document.getElementById('contact-name').value;

    // Name is empty  لو خانة الاسم فاضية

    if (name.length == 0) {

        // Print this message  اطبع الرسالة دي

        nameError.innerHTML = 'Name is required';
        return false;
    }

    /* هذا التعبير يتحقق تماما من ان الحرف الاول يجب ان يكون ابجديا 
       و بعد ذلك سيكون هناك مسافة واحدة
       وبعد ذلك يمكن ان يكون اي حرف من الحروف الابجدية
       هنا هنضيف علامة تعجب
       فهذا يعني ان القيمة لا تتطابق مع هذا التعبير ثم تعطي خطا
*/
    var name_re =/^[A-Za-z]*\s{1}[A-Za-z]*$/ ;
    if (!name.match(name_re)) {

        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = 'valid';
    return true;

}


function validatePhone() {

    // خانة الاسم سيتم تحزين اي قيمة يتم ادخالها في المتغير هذا

    var phone = document.getElementById('contact-phone').value;

    // Name is empty  لو خانة الاسم فاضية

    if (phone.length == 0) {

        // Print this message  اطبع الرسالة دي

        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length != 11) {

        // Print this message  اطبع الرسالة دي

        phoneError.innerHTML = 'Phone number should be 11 digits';
        return false;
    }

    /* هذا التعبير يتحقق تماما من ان الحرف الاول يجب ان يكون ابجديا 
       و بعد ذلك سيكون هناك مسافة واحدة
       وبعد ذلك يمكن ان يكون اي حرف من الحروف الابجدية
       هنا هنضيف علامة تعجب
       فهذا يعني ان القيمة لا تتطابق مع هذا التعبير ثم تعطي خطا
*/
    if (!phone.match(/^[0-9]{11}$/)) {

        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = 'valid';
    return true;

}


function validateEmail() {

    // خانة الاسم سيتم تحزين اي قيمة يتم ادخالها في المتغير هذا

    var email = document.getElementById('contact-email').value;

    // Name is empty  لو خانة الاسم فاضية

    if (email.length == 0) {

        // Print this message  اطبع الرسالة دي

        emailError.innerHTML = 'E-mail is required';
        return false;
    }
    /* هذا التعبير يتحقق تماما من ان الحرف الاول يجب ان يكون ابجديا 
       و بعد ذلك سيكون هناك مسافة واحدة
       وبعد ذلك يمكن ان يكون اي حرف من الحروف الابجدية
       هنا هنضيف علامة تعجب
       فهذا يعني ان القيمة لا تتطابق مع هذا التعبير ثم تعطي خطا
*/
        var Re_Email=  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (!email.match(Re_Email)) {

        emailError.innerHTML = 'E-mail Invalid';
        return false;
    }

    emailError.innerHTML = 'valid';
    return true;

}

function validateMessage() {

    // خانة الاسم سيتم تحزين اي قيمة يتم ادخالها في المتغير هذا

    var msg = document.getElementById('contact-mes').value;
    var required = 30;
    var left = required - msg.length;

    // Name is empty  لو خانة الاسم فاضية

    if (left > 0) {

        // Print this message  اطبع الرسالة دي

        txtError.innerHTML = left + ' ' + 'more characters required';
        return false;
    }

    txtError.innerHTML = 'valid';
    return true;

}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {

        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function () { submitError.style.display = 'none' }, 3000)
        return false;


    }
}