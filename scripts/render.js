const database_render = database

function renderHeader(type, data) {

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
            let div_p_union = document.createElement("div")
                let p_first_contrast = document.createElement("p")
            let span_info = document.createElement("span")
            let div_pics = document.createElement("div")
                let div_pic_1 = document.createElement("div")
                    let img_pic_5 = document.createElement("img")
                    let img_pic_6 = document.createElement("img")
                    let img_pic_7 = document.createElement("img")
                let div_pic_2 = document.createElement("div")
                    let img_pic_8 = document.createElement("img")
                   
        h1_header_title.classList.add("h1_header_title")
        div_p_union.classList.add("div_p_union")
        p_first_contrast.classList.add("p_first_contrast")
        span_info.classList.add("span_info")
        div_pics.classList.add("div_pics")
        div_pic_1.classList.add("div_pic_1")
        img_pic_5.classList.add("img_pic_1")
        img_pic_6.classList.add("img_pic_2")
        img_pic_7.classList.add("img_pic_3")
        div_pic_2.classList.add("div_pic_2")
        img_pic_8.classList.add("img_pic_4")

        header_app.innerHTML = ""
        h1_header_title.innerText = "Petinfo"
        p_first_contrast.innerText = "Obaaaaaaa"
        span_info.innerText = "agora vamos poder contribuir para o bem estar do seu pet por meio do conhecimento"

        img_pic_5.src = "./assets/img/pet6.png"
        img_pic_6.src = "./assets/img/pet7.png"
        img_pic_7.src = "./assets/img/pet8.png"
        img_pic_8.src = "./assets/img/pet5.png"

        header_app.append(h1_header_title, div_p_union, span_info, div_pics)
            div_p_union.appendChild(p_first_contrast)
            div_pics.append(div_pic_2, div_pic_1)
                div_pic_1.append(img_pic_5, img_pic_6, img_pic_7)
                div_pic_2.appendChild(img_pic_8)

    }

    if (type == 'loggedIn') {

        let header_app = document.querySelector(".header_app")
        
        header_app.innerHTML = ""

        let h2_header = document.createElement("h2")
        let div_user_button = document.createElement("div")
            let button_add_post = document.createElement("button")
            let img_user_pic = document.createElement("img")

            let div_pics = document.createElement("div")
            database_render.companies.forEach((company) => {

                    let img_logo = document.createElement("img")
                    
                    img_logo.classList.add("img_logo")

                    img_logo.src = company.avatar

                    div_pics.appendChild(img_logo)

                })

        header_app.removeAttribute("class")
        header_app.classList.add("header_app_logged_in")
        h2_header.classList.add("h2_header")
        div_user_button.classList.add("div_user_button")
        button_add_post.classList.add("button_add_post")
        img_user_pic.classList.add("img_user_pic")

        h2_header.innerText = "Petinfo"
        button_add_post.innerText = "Criar publicação"
        img_user_pic.src = data.avatar

        button_add_post.addEventListener("click", () => {
            renderModal('addPost')
        })

        header_app.append(h2_header, div_user_button)
            div_user_button.append(button_add_post, img_user_pic)

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
            renderRegisterPage()
        })

        input_user.addEventListener("keypress", () => {
            checkInputs(input_user, input_password)
        })

        input_password.addEventListener("keypress", () => {
            checkInputs(input_user, input_password)
        })

        main_app.append(h2_main_title, label_input_user, input_user,
            label_input_password, input_password,
            span_incorrect_password, button_submit,
            p_info, span_info, button_register)   
            
    }

    if (type == 'registerUser') {
        
        let main_app = document.querySelector(".main_app") || document.querySelector(".main_app_register")
            let div_title_and_back = document.createElement("div")
                let h2_main_title = document.createElement("h2")
                let p_back = document.createElement("p")
            let label_input_user = document.createElement("label")
            let input_user = document.createElement("input")
            let label_input_email = document.createElement("label")
            let input_email = document.createElement("input")
            let label_input_link_img = document.createElement("label")
            let input_link_img= document.createElement("input")
            let label_input_password = document.createElement("label")
            let input_password = document.createElement("input")
            let button_submit = document.createElement("button")
            let button_back_to_login = document.createElement("button")

        div_title_and_back.classList.add("div_title_and_back")
        h2_main_title.classList.add("h2_main_title")

        main_app.removeAttribute("class")
        main_app.classList.add("main_app_register")
        label_input_user.classList.add("label_input_user")
        p_back.classList.add("p_back")
        input_user.classList.add("input_user")
        label_input_email.classList.add("label_input_email")
        input_email.classList.add("input_email")
        label_input_link_img.classList.add("label_input_link_img")
        input_link_img.classList.add("input_link_img")
        label_input_password.classList.add("label_input_password")
        input_password.classList.add("input_password")
        button_submit.classList.add("button_submit")
        button_back_to_login.classList.add("button_back_to_login")

        main_app.innerHTML = ""
        h2_main_title.innerText = "Cadastro"
        p_back.innerText = "Voltar para o Login"
        label_input_user.innerText = "Usuário"
        input_user.placeholder = "Digite aqui seu usuário"
        label_input_email.innerText = "E-mail"
        input_email.placeholder = "Digite aqui seu e-mail"
        label_input_link_img.innerText = "Link da foto de perfil"
        input_link_img.placeholder = "Insira o link aqui"
        label_input_password.innerText = "Senha"
        input_password.placeholder = "Digite aqui sua senha"
        button_submit.innerText = "Cadastrar"
        button_back_to_login.innerText = "Voltar para o login"

        input_password.type = "password"

        button_submit.addEventListener("click", ()=> {

            let post_register = {
                username: input_user.value,
                email: input_email.value,
                password: input_password.value,
                avatar: input_link_img.value
              }

            registerUser(post_register)

        })
        button_back_to_login.addEventListener("click", () => {
            renderLoginPage()
        })

        main_app.append(div_title_and_back, label_input_user, input_user,
             label_input_email, input_email, label_input_link_img,
             input_link_img, label_input_password, input_password,
            button_submit, button_back_to_login)   
            div_title_and_back.append(h2_main_title, p_back)
        
    }
    
    if (type == 'loggedIn') {

        let body = document.querySelector("body")
        let div_modal_background = document.querySelector(".div_modal_background")

        if (div_modal_background) {

            body.removeChild(div_modal_background)

        }

        let main_app = document.querySelector(".main_app") || document.querySelector(".main_app_logged_in")
        let ul_feed = document.createElement("ul")
        let h2_ul_feed = document.createElement("h2")

        main_app.innerHTML = ""
        h2_ul_feed.innerText = "Feed"

        main_app.removeAttribute("class")
        main_app.classList.add("main_app_logged_in")
        ul_feed.classList.add("ul_feed")

        main_app.appendChild(ul_feed)
            ul_feed.appendChild(h2_ul_feed)

        let database_posts = await getPosts()

        database_posts.forEach((post) => {

            let li_post = document.createElement("li")
                let div_user_and_buttons = document.createElement("div")
                    let div_user_and_date = document.createElement("div")
                        let img_user_pic = document.createElement("img")
                        let p_user_name = document.createElement("p")
                        let p_post_date = document.createElement("p")
                    let div_edit_and_exclude = document.createElement("div")
                        let button_edit_post = document.createElement("button")
                        let button_exclude_post = document.createElement("button")
                let h2_post_title = document.createElement("h2")
                let p_post_text = document.createElement("p")
                let button_read_post = document.createElement("button")

            li_post.id = post.id

            li_post.classList.add("li_post")
            div_user_and_buttons.classList.add("div_user_and_buttons")
            div_user_and_date.classList.add("div_user_and_date")
            img_user_pic.classList.add("img_user_pic")
            p_user_name.classList.add("p_user_name")
            p_post_date.classList.add("p_post_date")
            div_edit_and_exclude.classList.add("div_edit_and_exclude")
            button_edit_post.classList.add("button_edit_post")
            button_exclude_post.classList.add("button_exclude_post")
            h2_post_title.classList.add("h2_post_title")
            p_post_text.classList.add("p_post_text")
            button_read_post.classList.add("button_read_post")

            img_user_pic.src = post.user.avatar

            p_user_name.innerText = post.user.username
            p_post_date.innerText = getDate()
            button_edit_post.innerText = "Editar"
            button_exclude_post.innerText = "Excluir"
            h2_post_title.innerText = post.title
            p_post_text.innerText = post.content
            button_read_post.innerText = "Acessar publicação"

            button_edit_post.addEventListener("click", () => {

                renderModal('editPost', post)

            })
            button_exclude_post.addEventListener("click", async () => {

                await renderModal('excludePost', post)

            })
            button_read_post.addEventListener("click", () => {

                renderModal('readPost', post)

            })

            ul_feed.appendChild(li_post)
                li_post.append(div_user_and_buttons, h2_post_title, p_post_text, button_read_post)

                let user_id = JSON.parse(localStorage.getItem("@Petinfo:userId"))

                div_user_and_buttons.appendChild(div_user_and_date)

                console.log(post.user.id)
                console.log(user_id)

                if (post.user.id == user_id) {

                    div_user_and_buttons.appendChild(div_edit_and_exclude)
                    div_edit_and_exclude.append(button_edit_post, button_exclude_post)

                }

                div_user_and_date.append(img_user_pic, p_user_name, p_post_date)




        })

    }

}

function renderModal(type, post) {

    if (type == "registerOk") {

        let body = document.querySelector("body")

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
        p_description.innerText = "Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:"
        a_link.innerText = "Acessar página de login"

        body.appendChild(div_modal)
            div_modal.append(div_modal_title, div_description)
                div_modal_title.append(img_checked, h2_modal_title)
                div_description.append(p_description, a_link)

    }

    if (type == "registerError") {

        let body = document.querySelector("body")

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

                renderModal('loading')
    
                let post_login = {
                    email: input_user.value,
                    password: input_password.value
                  }
    
                login(post_login)
    
            })

        }
    } 

}

renderLoginPage()