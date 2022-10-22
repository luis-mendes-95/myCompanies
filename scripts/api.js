import { renderHeader, renderMain, renderModal, renderLoginPage, renderRegisterPage, renderLoggedInPage } from "./render.js"

const user_id = JSON.parse(localStorage.getItem("@Petinfo:userId"))  || ""

let token = JSON.parse(localStorage.getItem("@Petinfo:token")) || ""

async function getPosts() {

    let response = await fetch(`http://localhost:3333/posts`, {
        "method": "GET",
        "headers": {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

    return response

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

    let response = await fetch(`http://localhost:3333/users/profile`, {
        "method": "GET",
        "headers": {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

    return response

}

async function login(data) {

    let response = await fetch(`http://localhost:3333/login`, {
        "method": "POST",
        "headers": {
            "Content-Type" : "application/json"
        },
        "body": JSON.stringify(data)
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

    if (response.token) {

        token = response.token
        localStorage.setItem("@Petinfo:Token", JSON.stringify(response.token))
        let user = await getUserInfo(token)
        localStorage.setItem("@Petinfo:userId", JSON.stringify(user.id))
        renderLoggedInPage(user)

    } else {

        renderModal('registerError')

    }

}

async function register(data) {

    let response = await fetch(`http://localhost:3333/users/create`, {
        "method": "POST",
        "headers": {
            "Content-Type" : "application/json"
        },
        "body": JSON.stringify(data)
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

    if (response.id) {
        localStorage.setItem("@Petinfo:userId", JSON.stringify(response.id))
        renderModal('registerOk')
    } else {
        renderModal('registerError')
    }

}

async function addPost(data) {

    let response = await fetch(`http://localhost:3333/posts/create`, {
        "method": "POST",
        "headers": {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
        "body": JSON.stringify(data)
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

}

async function editPost(id, data) {

    let response = await fetch(`http://localhost:3333/posts/${id}`, {
        "method": "PATCH",
        "headers": {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
        "body": data
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

    return response

}

async function deletePost(id) {

    let response = await fetch(`http://localhost:3333/posts/${id}`, {
        "method": "DELETE",
        "headers": {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
    }).then(function(response){
        return response.json()
    }).then(function(responseJson){
        return responseJson
    })

    return response

}

export { getIndexOfId, getDate, getNewId, getUserInfo, login, register, addPost, editPost, deletePost, getPosts }