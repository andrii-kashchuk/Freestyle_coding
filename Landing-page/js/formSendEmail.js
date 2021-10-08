/* ------------------------------- Создание сайта в Киеве ------------------------------- */

function form() {
    let list = document.getElementById("videoSample");
    let hide = document.getElementById("btnHide");

    videoSample.innerHTML = `<form id="fs-frm" 
                                name="simple-contact-form" 
                                accept-charset="utf-8" 
                                action="https://formspree.io/f/xknkykqv" 
                                method="POST">
                                  <fieldset id="fs-frm-inputs">
                                    <!--<label for="full-name">Имя</label>-->
                                    <input type="text" name="name" id="full-name" placeholder="Ваше имя" required="">
                                    <!--<label for="email-address">Ваш email</label>-->
                                    <input type="email" name="_replyto" id="email-address" placeholder="Например: info@gmail.com" required="">
                                    <!--<label for="message">Ваш вопрос</label>-->
                                    <textarea rows="5" name="message" id="message" placeholder="Задайте Ваш вопрос в этом поле. Спасибо!" required=""></textarea>
                                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
                                  </fieldset>
                                  <input type="submit" value="Отправить" >
                              </form>

<style>/* reset */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
  font-size: 16px; /* .825rem */
  margin-bottom: .5rem;
  padding-top: .2rem;
  display: flex;
  align-items: baseline;
}

/* border, padding, margin, width */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 4px;
  background-color: rgba(255,255,255,0.9);
  padding: .75em 1rem;
  margin-bottom: 1.5rem;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
  border-radius: 4px;
}
#fs-frm [type="text"],
#fs-frm [type="email"] {
  width: 100%;
}
#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
  outline: none;
}
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  margin-bottom: 0;
}
#fs-frm select {
  text-transform: none;
}

#fs-frm [type="checkbox"] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  display: inline-block;
  width: auto;
  margin: 0 .5em 0 0 !important;
}

#fs-frm [type="radio"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  appearance: radio;
}

/* address, locale */
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  display: inline;
}
#fs-frm fieldset.locale input[name="city"] {
  width: 52%;
}
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  width: 20%;
}
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"] {
  margin-right: 3%;
}
</style>`

    btnHide.innerHTML = ``;
}

/* ------------------------------- Разработка сайтов в Киеве ------------------------------- */

document.querySelector("#submit").onclick = function() {
    return setTimeout(
        form(),
        2000);
}


/*`
                            <!-- modify this form HTML and place wherever you want your form -->
                            <form
                              action="https://formspree.io/f/xbjqwqgw"
                              method="POST"
                              class="contactForm"
                            >
                              <label>
                                Ваш e-mail:
                                <input type="email" name="_replyto" class="fieldForm">
                              </label>
                              <label>
                                Ваш вопрос:
                                <textarea name="message" class="fieldForm"></textarea>
                              </label>
                              <!-- your other form fields go here -->
                              <label>
                                Ваш телефон:
                                <input type="text" name="phoneNumber" class="fieldForm">
                              </label>
                              <button type="submit" class="btn">Отправить</button>
                            </form>`;*/
/*`<form
    action="mailto:fullstack2021@gmail.com"
    enctype="text/plain"
    method="post"
    class="contactForm"
    onSubmit="form()">
    <input class="Name" type="text" placeholder="Имя">
    <input type="text" class="email" name="E-mail" id="E-mail" placeholder="E-mail">
    <input class="phone" type="number" placeholder="Номер телефона">
    <textarea name="Comment" id="Comment" class="question" type="text" placeholder="Вопрос"></textarea>
    <button type="submit" class="btn" value="Submit">Отправить</button>
</form>`;*/





/*
<form onSubmit="alert('submit!');return false">
    <input type="text" size="30" value="Установите фокус здесь и нажмите Enter">
        <input type="submit" value="Отправить" onClick="alert('click')">
</form>*/
