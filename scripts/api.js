const user_id = JSON.parse(localStorage.getItem("@myCompanies:userId"))  || ""

let token = JSON.parse(localStorage.getItem("@myCompanies:token")) || ""

const database = {

    companies: [
        {
            company: "Tejas Designs",
            avatar: "./assets/img/logo-tejas-designs.png",
            portfolio: [
                {
                    product: "Camiseta Básica Estampa Total Manga Curta Adulto",
                    category: "Camisetas",
                    mesh: "Dry Fit 100% Poliéster",
                    costs: [
                        {
                            costName: "1 Und Oceano Malhas Camiseta Básica Estampa Total Manga Curta Adulto",
                            value: 30.00
                        }
                    ],
                    price: 59.90
                },
                {
                    product: "Windbanner 3,10M Altura",
                    category: "Windbanners",
                    costs: [
                        {
                            costName: "Costura Windbanner Oceano Malhas",
                            qty: 1,
                            value: 10.00
                        },
                        {
                            costName: "Metro linear tactel sublimado",
                            qty: 2.5,
                            value: 14.80
                        },
                        {
                            costName: "Base concreto",
                            qty: 1,
                            value: 25.00
                        },
                        {
                            costName: "Haste Alumínio",
                            qty: 1,
                            value: 25.00
                        }
                    ],
                    price: 259.90
                },
            ],
            receivables: [],
            payables: []
        },
        {
            company: "Mundo dos Personalizados",
            avatar: "./assets/img/logo-mundo-dos-personalizados.png",
            portfolio: [
                {
                    product: "Camiseta Básica Estampa Total Manga Curta Adulto",
                    category: "Camisetas",
                    mesh: "Dry Fit 100% Poliéster",
                    costs: [
                        {
                            costName: "1 Und Oceano Malhas Camiseta Básica Estampa Total Manga Curta Adulto",
                            value: 30.00
                        }
                    ],
                    price: 59.90
                },
                {
                    product: "Windbanner 3,10M Altura",
                    category: "Windbanners",
                    costs: [
                        {
                            costName: "Costura Windbanner Oceano Malhas",
                            qty: 1,
                            value: 10.00
                        },
                        {
                            costName: "Metro linear tactel sublimado",
                            qty: 2.5,
                            value: 14.80
                        },
                        {
                            costName: "Base concreto",
                            qty: 1,
                            value: 25.00
                        },
                        {
                            costName: "Haste Alumínio",
                            qty: 1,
                            value: 25.00
                        }
                    ],
                    price: 259.90
                },
            ],
            receivables: [],
            payables: []
        },
        {
            company: "Mundo do Rock",
            avatar: "./assets/img/logo-mundo-do-rock.png",
            portfolio: [
                {
                    product: "Camiseta Básica Estampa Total Manga Curta Adulto",
                    category: "Camisetas",
                    mesh: "Dry Fit 100% Poliéster",
                    costs: [
                        {
                            costName: "1 Und Oceano Malhas Camiseta Básica Estampa Total Manga Curta Adulto",
                            value: 30.00
                        }
                    ],
                    price: 59.90
                },
                {
                    product: "Windbanner 3,10M Altura",
                    category: "Windbanners",
                    costs: [
                        {
                            costName: "Costura Windbanner Oceano Malhas",
                            qty: 1,
                            value: 10.00
                        },
                        {
                            costName: "Metro linear tactel sublimado",
                            qty: 2.5,
                            value: 14.80
                        },
                        {
                            costName: "Base concreto",
                            qty: 1,
                            value: 25.00
                        },
                        {
                            costName: "Haste Alumínio",
                            qty: 1,
                            value: 25.00
                        }
                    ],
                    price: 259.90
                },
            ],
            receivables: [],
            payables: []
        },   
        {
            company: "Oceano Malhas",
            avatar: "./assets/img/logo-oceano-malhas.png",
            portfolio: [
                {
                    product: "Camiseta Básica Estampa Total Manga Curta Adulto",
                    category: "Camisetas",
                    mesh: "Dry Fit 100% Poliéster",
                    costs: [
                        {
                            costName: "1 Und Oceano Malhas Camiseta Básica Estampa Total Manga Curta Adulto",
                            value: 30.00
                        }
                    ],
                    price: 59.90
                },
                {
                    product: "Windbanner 3,10M Altura",
                    category: "Windbanners",
                    costs: [
                        {
                            costName: "Costura Windbanner Oceano Malhas",
                            qty: 1,
                            value: 10.00
                        },
                        {
                            costName: "Metro linear tactel sublimado",
                            qty: 2.5,
                            value: 14.80
                        },
                        {
                            costName: "Base concreto",
                            qty: 1,
                            value: 25.00
                        },
                        {
                            costName: "Haste Alumínio",
                            qty: 1,
                            value: 25.00
                        }
                    ],
                    price: 259.90
                },
            ],
            receivables: [],
            payables: []
        }
    ],

    users: [
        {
            id: "1",
            username: "LuisMendes",
            password: "123456",
            access: 'All'
        }
    ],

    portfolio: [
        {
            product: "Camiseta Básica Estampa Total Manga Curta Adulto",
            category: "Camisetas",
            mesh: "Dry Fit 100% Poliéster",
            costs: [
                {
                    costName: "1 Und Oceano Malhas Camiseta Básica Estampa Total Manga Curta Adulto",
                    value: 30.00
                }
            ],
            price: 59.90
        },
        {
            product: "Windbanner 3,10M Altura",
            category: "Windbanners",
            costs: [
                {
                    costName: "Costura Windbanner Oceano Malhas",
                    qty: 1,
                    value: 10.00
                },
                {
                    costName: "Metro linear tactel sublimado",
                    qty: 2.5,
                    value: 14.80
                },
                {
                    costName: "Base concreto",
                    qty: 1,
                    value: 25.00
                },
                {
                    costName: "Haste Alumínio",
                    qty: 1,
                    value: 25.00
                }
            ],
            price: 259.90
        },
    ]

}

async function getPosts() {

    //search posts on database and return them all.

}

function getIndexOfId(id) {

    let index

    database_posts.forEach((post) => {
        if (post.id == id) {
            index = database_posts.indexOf(post)
        }
    })

    return index

}

function getDate() {
    let date = JSON.stringify(new Date())
    let year = date[1] + date[2] + date[3] + date[4]
    let month = date[6] + date[7]
   
    if (month == 1) {month = 'Janeiro'}
    if (month == 2) {month = 'Fevereiro'}
    if (month == 3) {month = 'Março'}
    if (month == 4) {month = 'Abril'}
    if (month == 5) {month = 'Maio'}
    if (month == 6) {month = 'Junho'}
    if (month == 7) {month = 'Julho'}
    if (month == 8) {month = 'Agosto'}
    if (month == 9) {month = 'Setembro'}
    if (month == 10) {month = 'Outubro'}
    if (month == 11) {month = 'Novembro'}
    if (month == 12) {month = 'Dezembro'}
   
   let text = `${month} de ${year}`
   
   return text

}
   
function getNewId() {
   
       let currentId = 0
   
   database_posts.forEach((post) => {
       currentId = post.id
   })
   
   currentId += 1
   
   return currentId

}

async function getUserInfo(token) {

  //return logged user informations

}

async function login(data) {

    //search if input values exists on registered users' array database.

    if (login == 'success') {

        token = response.token
        localStorage.setItem("@myCompanies:Token", JSON.stringify(response.token))
        let user = await getUserInfo(token)
        localStorage.setItem("@myCompanies:userId", JSON.stringify(user.id))
        renderLoggedInPage(user)

    } else {

        renderModal('loginError')

    }

}

async function registerCompany(data) {

    let newCompany = {

            company: data.company,
            avatar: data.avatar,
            portfolio: data.portfolio,
            receivables: [],
            payables: []

        }

    database.companies.push(newCompany)

}

async function registerUser(data) {

    //add a new user to the database.

    if (response.id) {
        localStorage.setItem("@myCompanies:userId", JSON.stringify(response.id))
        renderModal('registerOk')
    } else {
        renderModal('registerError')
    }

}

async function addPost(data) {

//user add post with customized information directed by customized users.

}

async function editPost(id, data) {

//make a splice on array and put the new patched item.

}

async function deletePost(id) {

//delete the post that have that same id on parameter

}