const selectLang = document.getElementsByTagName('select');
const body = document.querySelector('body');
const Options = document.getElementsByTagName('option');

function changeLang() {
    let selectLang = selectLang.value;
    body.classList.add('lang.neds');
}

