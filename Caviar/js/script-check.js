let login = "caviar";
let password = "2021";

document.getElementsByTagName('button')[0].onclick = checkIt;

function checkIt(){
    if (document.getElementsByTagName('input')[0].value == '' ||
        document.getElementsByTagName('input')[1].value == '' ) {
        document.getElementsByTagName('input')[0].style.borderColor = 'red';
        alert("Пожалуйста, введите данные для обоих полей!");
        clear();
        return;
    }
    else {
        if (document.getElementsByTagName('input')[0].value !== login ||
            document.getElementsByTagName('input')[1].value !== password) {
            document.getElementsByTagName('input')[1].style.borderColor = 'red';
            alert("Пароль или логин не верны!");
            clear();
            return;
        }
        else {
            if (document.getElementsByTagName('input')[0].value === login &&
                document.getElementsByTagName('input')[1].value === password ) {
                window.location="caviar2021.html";
            }
        }
    }
    function clear(){
        document.getElementsByTagName('input')[0].value = '';
        document.getElementsByTagName('input')[1].value = '';
    }
}
