$('.aside__checkbox').on('click', toggleCheckMark);

function toggleCheckMark() {
    $(this).toggleClass('aside__checkbox--checked');
}