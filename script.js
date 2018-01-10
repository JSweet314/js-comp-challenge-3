$('.aside__label').on('click', toggleCheckMark);

function toggleCheckMark() {
    $(event.target).children('.aside__checkbox').toggleClass('aside__checkbox--checked');
}