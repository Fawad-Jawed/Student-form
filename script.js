function Submit() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        gender: gender ? gender.value : null
    };
    
    console.log('Form Data:', formData);
    document.getElementById('registration-form').reset();
}
