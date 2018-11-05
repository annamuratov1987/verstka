jQuery(function($) {
    $('#feedbackModalForm').on('submit', function (event) {
        if (validateFeedbackModalForm()) { // если есть ошибки возвращает true
            event.preventDefault();
        }
    });
    $('#feedbackModalForm input').on('change', function (event) {
        $(this).removeClass('feedback-input-invalid');
    });
});

function validateFeedbackModalForm() {
    var invalid = false;
    if($('#feedbackName').val().length < 1){
        $("#feedbackName").attr('placeholder', 'Поле обязательно для заполнения');
        $("#feedbackName").addClass('feedback-input-invalid');
        invalid = true;
    }
    if($('#feedbackPhone').val().length < 1){
        $("#feedbackPhone").attr('placeholder', 'Поле обязательно для заполнения');
        $("#feedbackPhone").addClass('feedback-input-invalid');
        invalid = true;
    }else
    if($('#feedbackPhone').val().search(/[^0-9]/)!=-1){
        $("#feedbackPhone").val('');
        $("#feedbackPhone").attr('placeholder', 'Поле заполнено неправильно');
        $("#feedbackPhone").addClass('feedback-input-invalid');
        invalid = true;
    }
    var email = $('#feedbackEmail').val();
    if(email.length < 6){
        $("#feedbackEmail").attr('placeholder', 'Поле обязательно для заполнения');
        $("#feedbackEmail").addClass('feedback-input-invalid');
        invalid = true;
    }else
    if(email.search(/@/)==-1){
        $("#feedbackEmail").val('');
        $("#feedbackEmail").attr('placeholder', 'Поле заполнено неправильно');
        $("#feedbackEmail").addClass('feedback-input-invalid');
        invalid = true;
    }
    return invalid;
};