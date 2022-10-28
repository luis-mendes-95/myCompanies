let selected_companies = []

let selected_info = []

async function renderHeader(type, data) {

    if (type == 'login') {

        let header_app = document.querySelector(".header_app")
            let h1_header_title = document.createElement("h1")
            let p_text = document.createElement("p")
            let span_info = document.createElement("span")

                   
        h1_header_title.classList.add("h1_header_title")
        p_text.classList.add("p_text")
        span_info.classList.add("span_info")

        header_app.innerHTML = ""
        h1_header_title.innerText = "🌟My Companies"
        span_info.innerText = "Controlando todo o fluxo de trabalho"

        header_app.append(h1_header_title, p_text, span_info)

    }

    if (type == 'registerUser') {

     let header_app = document.querySelector(".header_app")
            let h1_header_title = document.createElement("h1")
            let p_text = document.createElement("p")
            let span_info = document.createElement("span")

                   
        h1_header_title.classList.add("h1_header_title")
        p_text.classList.add("p_text")
        span_info.classList.add("span_info")

        header_app.innerHTML = ""
        h1_header_title.innerText = "🌟My Companies"
        span_info.innerText = "Registre-se para administrar suas empresas e tarefas"

        header_app.append(h1_header_title, p_text, span_info)

    }

    if (type == 'loggedIn') {

        let header_app = document.querySelector(".header_app")
        
        header_app.innerHTML = ""

        let h2_header = document.createElement("h2")
        let p_logoff = document.createElement("p")
        let div_user_button = document.createElement("div")
            let button_schedule = document.createElement("button")
            let button_order = document.createElement("button")
            let button_products = document.createElement("button")
            let button_receivables = document.createElement("button")
            let button_payables = document.createElement("button")

            let div_pics = document.createElement("div")

            let p_select_company = document.createElement("p")

        header_app.removeAttribute("class")
        header_app.classList.add("header_app_logged_in")
        h2_header.classList.add("h2_header")
        p_logoff.classList.add("p_logoff")
        div_user_button.classList.add("div_user_button")
        button_schedule.classList.add("button_menu")
        button_order.classList.add("button_menu")
        button_products.classList.add("button_menu")
        button_receivables.classList.add("button_menu")
        button_payables.classList.add("button_menu")
        div_pics.classList.add("div_pics")
        p_select_company.classList.add("p_select_company")

        button_schedule.id = "schedule"
        button_order.id = "orders"
        button_products.id = "products"
        button_receivables.id = "receivables"
        button_payables.id = "payables"

        h2_header.innerText = `${user_name} - ${user_type}`
        p_logoff.innerText = "Sair"
        button_schedule.innerText = "AGENDA"
        button_order.innerText = "PEDIDOS"
        button_products.innerText = "PRODUTOS"
        button_receivables.innerText = "A RECEBER"
        button_payables.innerText = "A PAGAR"
        p_select_company.innerText = "Selecione uma ou mais empresas:"

        button_schedule.addEventListener("click", () => {
            renderModal('schedule')
        })
        p_logoff.addEventListener("click", () => {

            localStorage.setItem("@myCompanies:loggedIn", "false")
            window.location.assign("./index.html")

        })

        header_app.append(h2_header, p_logoff, div_pics, div_user_button)
            div_pics.appendChild(p_select_company)
            database.companies.forEach((company) => {

                let img_logo = document.createElement("img")

                img_logo.company = company.company
                
                img_logo.classList.add("img_logo")

                img_logo.src = company.avatar

                div_pics.appendChild(img_logo)

                img_logo.addEventListener("click", () => {

                    if (img_logo.classList == "img_logo") {

                        img_logo.removeAttribute("class")
                        img_logo.classList.add("img_logo_selected")
                        infoOn(img_logo.company)

                    } else {

                        img_logo.removeAttribute("class")
                        img_logo.classList.add("img_logo")
                        infoOff(img_logo.company)

                    }

                })

            })
            div_user_button.append(button_schedule, button_order, button_products,
                button_receivables, button_payables)

        let buttons_menu = document.querySelectorAll(".button_menu")

        buttons_menu.forEach((button) => {

            button.addEventListener("click", () => {

                if (button.classList == "button_menu") {

                    let info_to_display = button.id

                    button.removeAttribute("class")
                    button.classList.add("button_menu_selected")
                    displayOn(info_to_display)

                } else if (button.classList == "button_menu_selected") {

                    let info_to_display = button.id

                    button.removeAttribute("class")
                    button.classList.add("button_menu")
                    displayOff(info_to_display)
                }

            })

        })


    }

}

async function renderMain(type) {

    if (type == 'login') {
 
        let main_app = document.querySelector(".main_app") || document.querySelector(".main_app_register")
            let h2_main_title = document.createElement("h2")
            let label_input_user = document.createElement("label")
            let input_user = document.createElement("input")
            let label_input_password = document.createElement("label")
            let input_password = document.createElement("input")
            let span_incorrect_password = document.createElement("span")
            let button_submit = document.createElement("button")
            let p_info = document.createElement("p")
            let span_info = document.createElement("span")
            let button_register = document.createElement("button")

        
        main_app.removeAttribute("class")
        main_app.classList.add("main_app")
        h2_main_title.classList.add("h2_main_title")
        label_input_user.classList.add("label_input_user")
        input_user.classList.add("input_user")
        label_input_password.classList.add("label_input_password")
        input_password.classList.add("input_password")
        span_incorrect_password.classList.add("span_incorrect_password")
        button_submit.classList.add("button_submit_disabled")
        p_info.classList.add("p_info")
        span_info.classList.add("span_info")
        button_register.classList.add("button_register")

        main_app.innerHTML = ""
        h2_main_title.innerText = "Login"
        label_input_user.innerText = "Usuário"
        input_user.placeholder = "Digite aqui seu usuário"
        label_input_password.innerText = "Senha"
        input_password.placeholder = "Digite aqui sua senha"
        span_incorrect_password.innerText = "A senha está incorreta"
        button_submit.innerText = "Acessar"
        p_info.innerText = "Ainda não possui conta?"
        span_info.innerText = "Clicando no botão abaixo, você pode se cadastrar rapidamente."
        button_register.innerText = "Cadastrar"

        input_password.type = "password"

        button_register.addEventListener("click", () => {
            let body = document.querySelector("body")
            let div_modal_to_remove = document.querySelector(".div_modal") || ""

            if (div_modal_to_remove != "") {
                body.removeChild(div_modal_to_remove)
            }
            renderRegisterPage()
        })

        input_user.addEventListener("keypress", () => {
            checkInputs(input_user, input_password)
        })

        input_password.addEventListener("keypress", (e) => {
            checkInputs(input_user, input_password)

            if (e.key === "Enter") {

                let user_login = {
                    username: input_user.value,
                    password: input_password.value
                  }
    
                login(user_login)

            }
        })

        main_app.append(h2_main_title, label_input_user, input_user,
            label_input_password, input_password,
            span_incorrect_password, button_submit,
            p_info, span_info, button_register)   
            
    }

    if (type == 'registerUser') {
        
        let main_app = document.querySelector(".main_app")
            let h2_main_title = document.createElement("h2")
            let label_input_user = document.createElement("label")
            let input_user = document.createElement("input")
            let label_input_email = document.createElement("label")
            let input_email = document.createElement("input")
            let label_input_password = document.createElement("label")
            let input_password = document.createElement("input")
            let button_submit = document.createElement("button")
            let button_back = document.createElement("button")

            h2_main_title.classList.add("h2_main_title")
            label_input_user.classList.add("label_input_user")
            input_user.classList.add("input_user")
            label_input_email.classList.add("label_input_email")
            input_email.classList.add("input_email")
            label_input_password.classList.add("label_input_password")
            input_password.classList.add("input_password")
            button_submit.classList.add("button_submit_enabled")
            button_back.classList.add("button_back")

        main_app.innerHTML = ""
        h2_main_title.innerText = "Cadastro"
        label_input_user.innerText = "Usuário"
        input_user.placeholder = "Digite aqui seu usuário"
        label_input_email.innerText = "E-mail"
        input_email.placeholder = "Digite aqui seu e-mail"
        label_input_password.innerText = "Senha"
        input_password.placeholder = "Digite aqui sua senha"
        button_submit.innerText = "Cadastrar"
        button_back.innerText = "Voltar"

        input_password.type = "password"

        button_submit.addEventListener("click", ()=> {

            let new_user = {
                id: getNewId(),
                username: input_user.value,
                email: input_email.value,
                password: input_password.value,
                userType: 'Admin'
              }

            input_user.value = ""
            input_email.value = ""
            input_password.value = ""

            registerUser(new_user)

        })
        button_back.addEventListener("click", () => {
            renderLoginPage()
            let body = document.querySelector("body")
            let div_modal_to_remove = document.querySelector(".div_modal") || ""

            if (div_modal_to_remove != "") {
                body.removeChild(div_modal_to_remove)
            }
        })

        main_app.append(h2_main_title,label_input_user,
            input_user,label_input_email,input_email,
            label_input_password,input_password,button_submit,button_back)
        
    }
    
    if (type == 'loggedIn') {

        let body = document.querySelector("body")
        let div_modal_background = document.querySelector(".div_modal_background")

        if (div_modal_background) {

            body.removeChild(div_modal_background)

        }

        let main_app = document.querySelector(".main_app")
        let ul_schedule = document.createElement("ul")
        let h2_ul_schedule = document.createElement("h2")

        main_app.innerHTML = ""
        h2_ul_schedule.innerText = "AGENDA"

        main_app.removeAttribute("class")
        main_app.classList.add("main_app_logged_in")

    }

    if (type == 'schedule') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_schedule = document.createElement("div")
                let div_title_and_button = document.createElement("div")
                    let h2_info_title = document.createElement("h2")
                    let button_add_new_info = document.createElement("button")
                let ul_info = document.createElement("ul")
                    li_info = document.createElement("li")
                        let p_user_responsible = document.createElement("p")
                        let p_info_client = document.createElement("p")
                        let p_info_date = document.createElement("p")

        //main_app
            div_schedule.classList.add("div_schedule")
                div_title_and_button.classList.add("div_title_and_button")
                    h2_info_title.classList.add("h2_info_title")
                    button_add_new_info.classList.add("button_add_new_info")
                ul_info.classList.add("ul_info")
                    li_info.classList.add("li_info")
                        p_user_responsible.classList.add("p_user_responsible")
                        p_info_client.classList.add("p_info_client")
                        p_info_date.classList.add("p_info_date")

        //main_app
            //div_schedule
            //div_title_and_button
                h2_info_title.innerText = "AGENDA"
                button_add_new_info.innerText = "+"
            //ul_info
                //li_info
                    p_user_responsible.innerText = "LUIS"
                    p_info_client.innerText = "OCEANO MALHAS"
                    p_info_date.innerText = "29/10/2022"

        main_app.appendChild(div_schedule)
            div_schedule.append(div_title_and_button, ul_info)
                div_title_and_button.append(h2_info_title, button_add_new_info)
                ul_info.appendChild(li_info)
                    li_info.append(p_user_responsible, p_info_client, p_info_date)
 
    }

    if (type == 'orders') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_orders = document.createElement("div")
                let div_title_and_button = document.createElement("div")
                    let h2_info_title = document.createElement("h2")
                    let button_add_new_info = document.createElement("button")
                let ul_info = document.createElement("ul")
                    li_info = document.createElement("li")
                        let p_info_client = document.createElement("p")
                        let p_value = document.createElement("p")

        //main_app
            div_orders.classList.add("div_orders")
                div_title_and_button.classList.add("div_title_and_button")
                    h2_info_title.classList.add("h2_info_title")
                    button_add_new_info.classList.add("button_add_new_info")
                ul_info.classList.add("ul_info")
                    li_info.classList.add("li_info")
                        p_info_client.classList.add("p_info_client")
                        p_value.classList.add("p_value")

        //main_app
            //div_schedule
            //div_title_and_button
                h2_info_title.innerText = "PEDIDOS"
                button_add_new_info.innerText = "+"
            //ul_info
                //li_info
                    p_info_client.innerText = "ROTA 47 CONVENIENCIA"
                    p_value.innerText = "R$ 480,00"

        main_app.appendChild(div_orders)
            div_orders.append(div_title_and_button, ul_info)
                div_title_and_button.append(h2_info_title, button_add_new_info)
                ul_info.appendChild(li_info)
                    li_info.append(p_info_client, p_value)

    }

    if (type == 'products') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_products = document.createElement("div")
                let div_title_and_button = document.createElement("div")
                    let h2_info_title = document.createElement("h2")
                    let button_add_new_info = document.createElement("button")
                let ul_info = document.createElement("ul")
                    li_info = document.createElement("li")
                        let p_info_product = document.createElement("p")
                        let p_value = document.createElement("p")

        //main_app
            div_products.classList.add("div_products")
                div_title_and_button.classList.add("div_title_and_button")
                    h2_info_title.classList.add("h2_info_title")
                    button_add_new_info.classList.add("button_add_new_info")
                ul_info.classList.add("ul_info")
                    li_info.classList.add("li_info")
                        p_info_product.classList.add("p_info_product")
                        p_value.classList.add("p_value")

        //main_app
            //div_schedule
            //div_title_and_button
                h2_info_title.innerText = "PRODUTOS"
                button_add_new_info.innerText = "+"
            //ul_info
                //li_info
                    p_info_product.innerText = "WINDBANNER 3,10M ALTURA"
                    p_value.innerText = "R$ 289,00"

        main_app.appendChild(div_products)
            div_products.append(div_title_and_button, ul_info)
                div_title_and_button.append(h2_info_title, button_add_new_info)
                ul_info.appendChild(li_info)
                    li_info.append(p_info_product, p_value)
 
    }

    if (type == 'receivables') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_receivables = document.createElement("div")
                let div_title_and_button = document.createElement("div")
                    let h2_info_title = document.createElement("h2")
                    let button_add_new_info = document.createElement("button")
                let ul_info = document.createElement("ul")
                    li_info = document.createElement("li")
                        let p_info_client = document.createElement("p")
                        let p_value = document.createElement("p")

        //main_app
            div_receivables.classList.add("div_receivables")
                div_title_and_button.classList.add("div_title_and_button")
                    h2_info_title.classList.add("h2_info_title")
                    button_add_new_info.classList.add("button_add_new_info")
                ul_info.classList.add("ul_info")
                    li_info.classList.add("li_info")
                        p_info_client.classList.add("p_info_client")
                        p_value.classList.add("p_value")

        //main_app
            //div_schedule
            //div_title_and_button
                h2_info_title.innerText = "A RECEBER"
                button_add_new_info.innerText = "+"
            //ul_info
                //li_info
                    p_info_client.innerText = "MUNDO DOS PERSONALIZADOS"
                    p_value.innerText = "R$ 846,00"

        main_app.appendChild(div_receivables)
            div_receivables.append(div_title_and_button, ul_info)
                div_title_and_button.append(h2_info_title, button_add_new_info)
                ul_info.appendChild(li_info)
                    li_info.append(p_info_client, p_value)
 
    }

    if (type == 'payables') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_payables = document.createElement("div")
                let div_title_and_button = document.createElement("div")
                    let h2_info_title = document.createElement("h2")
                    let button_add_new_info = document.createElement("button")
                let ul_info = document.createElement("ul")
                    li_info = document.createElement("li")
                        let p_info_client = document.createElement("p")
                        let p_value = document.createElement("p")

        //main_app
            div_payables.classList.add("div_payables")
                div_title_and_button.classList.add("div_title_and_button")
                    h2_info_title.classList.add("h2_info_title")
                    button_add_new_info.classList.add("button_add_new_info")
                ul_info.classList.add("ul_info")
                    li_info.classList.add("li_info")
                        p_info_client.classList.add("p_info_client")
                        p_value.classList.add("p_value")

        //main_app
            //div_schedule
            //div_title_and_button
                h2_info_title.innerText = "A PAGAR"
                button_add_new_info.innerText = "+"
            //ul_info
                //li_info
                    p_info_client.innerText = "M2 SUBLIMAÇÃO"
                    p_value.innerText = "R$ 37,25"

        main_app.appendChild(div_payables)
            div_payables.append(div_title_and_button, ul_info)
                div_title_and_button.append(h2_info_title, button_add_new_info)
                ul_info.appendChild(li_info)
                    li_info.append(p_info_client, p_value)
 
    }

}

function renderModal(type, post) {

    if (type == "registerOk") {

        let body = document.querySelector("body")
        let div_modal_to_remove = document.querySelector(".div_modal") || ""

        if (div_modal_to_remove != "") {
            body.removeChild(div_modal_to_remove)
        }

        let div_modal = document.createElement("div")
            let div_modal_title = document.createElement("div")
                let img_checked = document.createElement("img")
                let h2_modal_title = document.createElement("h2")
            let div_description = document.createElement("div")
                let p_description = document.createElement("p")
                let a_link = document.createElement("a")

        div_modal.classList.add("div_modal")
        div_modal_title.classList.add("div_modal_title")
        img_checked.classList.add("img_checked")
        h2_modal_title.classList.add("h2_modal_title")
        div_description.classList.add("div_description")
        p_description.classList.add("p_description")
        a_link.classList.add("a_link")

        img_checked.src = "./assets/img/checked.png"

        a_link.href = "./index.html"
       
        h2_modal_title.innerText = "Sua conta foi criada com sucesso!"
        p_description.innerText = "Comece a administrar seus negócios utilizando seu usuário e senha na página de login:"
        a_link.innerText = "Acessar página de login"

        body.appendChild(div_modal)
            div_modal.append(div_modal_title, div_description)
                div_modal_title.append(img_checked, h2_modal_title)
                div_description.append(p_description, a_link)

    }

    if (type == "registerError") {

        let body = document.querySelector("body")
        let div_modal_to_remove = document.querySelector(".div_modal") || ""

        if (div_modal_to_remove != "") {
            body.removeChild(div_modal_to_remove)
        }

        let div_modal = document.createElement("div")
            let div_modal_title = document.createElement("div")
                let h2_modal_title = document.createElement("h2")
            let div_description = document.createElement("div")
                let p_description = document.createElement("p")
                let a_link = document.createElement("a")

        div_modal.classList.add("div_modal")
        div_modal_title.classList.add("div_modal_title")
        h2_modal_title.classList.add("h2_modal_title_error")
        div_description.classList.add("div_description")
        p_description.classList.add("p_description")
        a_link.classList.add("a_link")


        a_link.href = "./index.html"
       
        h2_modal_title.innerText = "Ooops, algo deu errado!"
        p_description.innerText = "Verifique seus dados e tente novamente."
        a_link.innerText = "Tentar novamente"

        body.appendChild(div_modal)
            div_modal.append(div_modal_title, div_description)
                div_modal_title.append(h2_modal_title)
                div_description.append(p_description, a_link)

    }

    if (type == "loginError") {

        let body = document.querySelector("body")
        let div_modal_to_remove = document.querySelector(".div_modal") || ""

        if (div_modal_to_remove != "") {
            body.removeChild(div_modal_to_remove)
        }

        let div_modal = document.createElement("div")
            let div_modal_title = document.createElement("div")
                let h2_modal_title = document.createElement("h2")
            let div_description = document.createElement("div")
                let p_description = document.createElement("p")
                let a_link = document.createElement("a")

        div_modal.classList.add("div_modal")
        div_modal_title.classList.add("div_modal_title")
        h2_modal_title.classList.add("h2_modal_title_error")
        div_description.classList.add("div_description")
        p_description.classList.add("p_description")
        a_link.classList.add("a_link")


        a_link.href = "./index.html"
       
        h2_modal_title.innerText = "Ooops, algo deu errado!"
        p_description.innerText = "Verifique seus dados e tente novamente."
        a_link.innerText = "Tentar novamente"

        body.appendChild(div_modal)
            div_modal.append(div_modal_title, div_description)
                div_modal_title.append(h2_modal_title)
                div_description.append(p_description, a_link)

    }

    if (type == "addPost") {

        let body = document.querySelector("body")

        let div_modal_background = document.createElement("div")
            let div_modal_content = document.createElement("div")
                let div_title_and_close = document.createElement("div")
                    let h2_modal_title_add_new_post = document.createElement("h2")
                    let button_close_modal_add_post = document.createElement("button")
                let div_content_and_buttons = document.createElement("div")
                    let label_input_post_title = document.createElement("label")
                    let input_post_title = document.createElement("input")
                    let label_input_post_text = document.createElement("label")
                    let input_post_text = document.createElement("textarea")
                    let div_cancel_and_publish = document.createElement("div")
                        let button_cancel = document.createElement("button")
                        let button_publish = document.createElement("button")

        div_modal_background.classList.add("div_modal_background")
        div_modal_content.classList.add("div_modal_content")
        div_title_and_close.classList.add("div_title_and_close")
        h2_modal_title_add_new_post.classList.add("h2_modal_title_add_new_post")
        button_close_modal_add_post.classList.add("button_close_modal_add_post")
        div_content_and_buttons.classList.add("div_content_and_buttons")
        label_input_post_title.classList.add("label_input_post_title")
        input_post_title.classList.add("input_post_title")
        label_input_post_text.classList.add("label_input_post_text")
        input_post_text.classList.add("input_post_text")
        div_cancel_and_publish.classList.add("div_cancel_and_publish")
        button_cancel.classList.add("button_cancel")
        button_publish.classList.add("button_publish")

        h2_modal_title_add_new_post.innerText = "Criando novo post"
        button_close_modal_add_post.innerText = "X"
        label_input_post_title.innerText = "Título do post"
        input_post_title.placeholder = "Digite o título aqui..."
        label_input_post_text.innerText = "Conteúdo do post"
        input_post_text.placeholder = "Desenvolva o conteúdo do post aqui..."
        button_cancel.innerText = "Cancelar"
        button_publish.innerText = "Publicar"

        button_close_modal_add_post.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })
        button_cancel.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })
        button_publish.addEventListener("click", async () => {

            let data = {
                title: input_post_title.value,
                content: input_post_text.value
            }

            await addPost(data)
            body.removeChild(div_modal_background)
            await renderMain('loggedIn')
        })
        

        body.appendChild(div_modal_background)
            div_modal_background.appendChild(div_modal_content)
                div_modal_content.append(div_title_and_close, div_content_and_buttons)
                    div_title_and_close.append(h2_modal_title_add_new_post, button_close_modal_add_post)
                    div_content_and_buttons.append(label_input_post_title, input_post_title, 
                                                    label_input_post_text, input_post_text, 
                                                    div_cancel_and_publish)
                        div_cancel_and_publish.append(button_cancel, button_publish)

    }

    if (type == "editPost") {

        let body = document.querySelector("body")

        let div_modal_background = document.createElement("div")
            let div_modal_content = document.createElement("div")
                let div_title_and_close = document.createElement("div")
                    let h2_modal_title_edit_post = document.createElement("h2")
                    let button_close_modal_add_post = document.createElement("button")
                let div_content_and_buttons = document.createElement("div")
                    let label_input_post_title = document.createElement("label")
                    let input_post_title = document.createElement("input")
                    let label_input_post_text = document.createElement("label")
                    let input_post_text = document.createElement("textarea")
                    let div_cancel_and_publish = document.createElement("div")
                        let button_cancel = document.createElement("button")
                        let button_publish = document.createElement("button")

        div_modal_background.classList.add("div_modal_background")
        div_modal_content.classList.add("div_modal_content")
        div_title_and_close.classList.add("div_title_and_close")
        h2_modal_title_edit_post.classList.add("h2_modal_title_edit_post")
        button_close_modal_add_post.classList.add("button_close_modal_add_post")
        div_content_and_buttons.classList.add("div_content_and_buttons")
        label_input_post_title.classList.add("label_input_post_title")
        input_post_title.classList.add("input_post_title")
        label_input_post_text.classList.add("label_input_post_text")
        input_post_text.classList.add("input_post_text")
        div_cancel_and_publish.classList.add("div_cancel_and_publish")
        button_cancel.classList.add("button_cancel")
        button_publish.classList.add("button_publish")

        h2_modal_title_edit_post.innerText = "Edição"
        button_close_modal_add_post.innerText = "X"
        label_input_post_title.innerText = "Título do post"
        input_post_title.placeholder = "Digite o título aqui..."
        input_post_title.value = post.title
        label_input_post_text.innerText = "Conteúdo do post"
        input_post_text.placeholder = "Desenvolva o conteúdo do post aqui..."
        input_post_text.value = post.content
        button_cancel.innerText = "Cancelar"
        button_publish.innerText = "Salvar alterações"

        button_close_modal_add_post.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })
        button_cancel.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })
        button_publish.addEventListener("click", async () => {

            let data = {
                title : input_post_title.value,
                content : input_post_text.value
            }
            
            await editPost(post.id, JSON.stringify(data))
            body.removeChild(div_modal_background)
            renderMain('loggedIn')
        })
        
        body.appendChild(div_modal_background)
            div_modal_background.appendChild(div_modal_content)
                div_modal_content.append(div_title_and_close, div_content_and_buttons)
                    div_title_and_close.append(h2_modal_title_edit_post, button_close_modal_add_post)
                    div_content_and_buttons.append(label_input_post_title, input_post_title, 
                                                    label_input_post_text, input_post_text, 
                                                    div_cancel_and_publish)
                        div_cancel_and_publish.append(button_cancel, button_publish)

    }

    if (type == "excludePost") {

        let body = document.querySelector("body")

        let div_modal_background = document.createElement("div")
            let div_modal_content = document.createElement("div")
                let div_title_and_close = document.createElement("div")
                    let h2_modal_title_edit_post = document.createElement("h2")
                    let button_close_modal_add_post = document.createElement("button")
                let div_content_and_buttons = document.createElement("div")
                    let h3_confirm_exclude = document.createElement("h3")
                    let p_confirm_exclude = document.createElement("p")
                    let div_cancel_and_publish = document.createElement("div")
                        let button_cancel = document.createElement("button")
                        let button_confirm_exclude = document.createElement("button")

        div_modal_background.classList.add("div_modal_background")
        div_modal_content.classList.add("div_modal_content_exclude")
        div_title_and_close.classList.add("div_title_and_close")
        h2_modal_title_edit_post.classList.add("h2_modal_title_edit_post")
        button_close_modal_add_post.classList.add("button_close_modal_add_post")
        div_content_and_buttons.classList.add("div_content_and_buttons")
        h3_confirm_exclude.classList.add("h3_confirm_exclude")
        p_confirm_exclude.classList.add("p_confirm_exclude")
        div_cancel_and_publish.classList.add("div_cancel_and_publish")
        button_cancel.classList.add("button_cancel")
        button_confirm_exclude.classList.add("button_confirm_exclude")

        h2_modal_title_edit_post.innerText = "Edição"
        button_close_modal_add_post.innerText = "X"
        h3_confirm_exclude.innerText = "Tem certeza que deseja excluir este post?"
        button_cancel.innerText = "Cancelar"
        button_confirm_exclude.innerText = "Sim, excluir este post"

        button_close_modal_add_post.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })
        button_cancel.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })
        button_confirm_exclude.addEventListener("click", async () => {
            await deletePost(post.id)
            body.removeChild(div_modal_background)
            renderMain('loggedIn')
        })
        
        body.appendChild(div_modal_background)
            div_modal_background.appendChild(div_modal_content)
                div_modal_content.append(div_title_and_close, div_content_and_buttons)
                    div_title_and_close.append(h2_modal_title_edit_post, button_close_modal_add_post)
                    div_content_and_buttons.append(h3_confirm_exclude, p_confirm_exclude, div_cancel_and_publish)
                        div_cancel_and_publish.append(button_cancel, button_confirm_exclude)

    }

    if (type == "readPost") {

        let body = document.querySelector("body")

        let div_modal_background = document.createElement("div")
            let div_modal_content = document.createElement("div")
                let div_user_and_buttons = document.createElement("div")
                    let div_user_and_date = document.createElement("div")
                        let div_user_and_close_button = document.createElement("div")
                            let img_user_pic = document.createElement("img")
                            let p_user_name = document.createElement("p")
                            let p_post_date = document.createElement("p")
                        let div_button_close = document.createElement("div")
                            let button_close_modal_read_post = document.createElement("button")
                let h2_post_title = document.createElement("h2")
                let p_post_text = document.createElement("p")

        div_modal_background.classList.add("div_modal_background")
        div_modal_content.classList.add("div_modal_content_read")
        div_user_and_buttons.classList.add("div_user_and_buttons")
        div_user_and_date.classList.add("div_user_and_date_read")
        div_user_and_close_button.classList.add("div_user_and_close_button")
        img_user_pic.classList.add("img_user_pic")
        p_user_name.classList.add("p_user_name")
        p_post_date.classList.add("p_post_date")
        button_close_modal_read_post.classList.add("button_close_modal_read_post")
        h2_post_title.classList.add("h2_post_title")
        p_post_text.classList.add("p_post_text")

        img_user_pic.src = post.user.avatar
        p_user_name.innerText = post.user.username
        p_post_date.innerText = getDate()
        button_close_modal_read_post.innerText = "X"
        h2_post_title.innerText = post.title
        p_post_text.innerText = post.content    

        button_close_modal_read_post.addEventListener("click", () => {
            body.removeChild(div_modal_background)
        })

        body.appendChild(div_modal_background)
        div_modal_background.append(div_modal_content)
            div_modal_content.append(div_user_and_buttons, h2_post_title, p_post_text)
                div_user_and_buttons.append(div_user_and_date)
                    div_user_and_date.append(div_user_and_close_button, div_button_close)
                        div_user_and_close_button.append(img_user_pic, p_user_name, p_post_date)
                        div_button_close.appendChild(button_close_modal_read_post)

    }

    if (type == "loading") {

        let body = document.querySelector("body")

        let div_modal_background = document.createElement("div")
            let p_loading = document.createElement("p")
                
        div_modal_background.classList.add("div_modal_background")
        p_loading.classList.add("p_loading")

        p_loading.innerText = "߷"

        body.appendChild(div_modal_background)
            div_modal_background.appendChild(p_loading)
    }

}

function renderLoginPage() {
    renderHeader('login')
    renderMain('login')
}

async function renderRegisterPage() {
    renderMain('registerUser')
    renderHeader('registerUser')

}

function renderLoggedInPage(data) {
    renderHeader('loggedIn', data)
    renderMain('loggedIn', data)
}

function checkInputs(input_user, input_password) {

    if(input_user.value.length > 0 && input_password.value.length > 0) {

        let button_submit = document.querySelector(".button_submit_disabled")

        if (button_submit) {

            button_submit.removeAttribute("class")
            button_submit.classList.add("button_submit_enabled")

            button_submit.addEventListener("click", ()=> {
    
                let user_login = {
                    username: input_user.value,
                    password: input_password.value
                  }
    
                login(user_login)
    
            })

        }
    } 

}

function infoOn(company) {

    selected_companies.push(company)

    console.log(selected_companies)

}

function infoOff(company) {

    console.log(selected_companies)

    let index = getIndex(selected_companies, company)

    selected_companies.splice(index, 1)   

    console.log(selected_companies)

}

function displayOn(info_to_display) {

    selected_info.push(info_to_display)

    console.log(selected_info)

    renderMain(info_to_display)

}

function displayOff(info_to_display) {

    let index = getIndex(selected_info, info_to_display)

    selected_info.splice(index, 1)

    console.log(selected_info)

    if (info_to_display == 'schedule') {

    let main_app = document.querySelector(".main_app_logged_in")
        let div_schedule = document.querySelector(".div_schedule")

    main_app.removeChild(div_schedule)

    }

    if (info_to_display == 'orders') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_orders = document.querySelector(".div_orders")
    
        main_app.removeChild(div_orders)
    
    }

    if (info_to_display == 'products') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_products = document.querySelector(".div_products")
    
        main_app.removeChild(div_products)
    
    }

    if (info_to_display == 'receivables') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_receivables = document.querySelector(".div_receivables")
    
        main_app.removeChild(div_receivables)
    
    }

    if (info_to_display == 'payables') {

        let main_app = document.querySelector(".main_app_logged_in")
            let div_payables = document.querySelector(".div_payables")
    
        main_app.removeChild(div_payables)
    
    }



}

if (loggedIn == "true") {

    let user = {
        id: user_id,
        username: user_name,
        access: user_type    
    }

    renderLoggedInPage(user)

} else {
    renderLoginPage()
}

