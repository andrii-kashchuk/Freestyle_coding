let login = "kaschey";
let password = "130282";

document.getElementsByTagName('button')[0].onclick = checkIt;

function checkIt(){
    if (document.getElementsByTagName('input')[0].value == '' ||
        document.getElementsByTagName('input')[1].value == '' ) {
        document.getElementsByTagName('input')[0].style.borderColor = 'red';
        alert("Please fill both two fields!");
        clear();
        return;
    }
    else {
        if (document.getElementsByTagName('input')[0].value !== login ||
            document.getElementsByTagName('input')[1].value !== password) {
            document.getElementsByTagName('input')[1].style.borderColor = 'red';
            alert("Password or login incorrect!");
            clear();
            return;
        }
        else {
            if (document.getElementsByTagName('input')[0].value === login &&
                document.getElementsByTagName('input')[1].value === password ) {
                window.location="cv.html";
            }
        }
    }
    function clear(){
        document.getElementsByTagName('input')[0].value = '';
        document.getElementsByTagName('input')[1].value = '';
    }
}
