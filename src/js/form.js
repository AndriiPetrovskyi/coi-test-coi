const formRef = document.querySelector('form');
const formBtnRef = document.querySelector('.form_btn');
const popupFormRef = document.querySelector('.form_popup');
const closePopupBtn =document.querySelector('.close-popup')



formRef.addEventListener('submit', event => {
    event.preventDefault();
    const formItem = event.target;

    if(formItem.name.value.length >= 3 && formItem.email.value.length >= 5){
       popupFormRef.classList.add('form_popup-active');
    }



    // submitted form

    const submittedData = {};
    
    const formData = new FormData(formItem);
    formData.forEach((value, key) => {

    submittedData[key] = value;
    });
    console.log(submittedData)
});

closePopupBtn.addEventListener('click', () => {
    popupFormRef.classList.remove('form_popup-active');
})


