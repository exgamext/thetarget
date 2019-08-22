/* Index */

function login(){
    let luser = document.getElementById('login-user')
    let lpass = document.getElementById('login-pass')

    if(luser.value == '' || lpass.value == ''){
        alert('Usuário ou senha estão em falta')
    }else{
        alert(`Bem vindo ${luser.value} ao The {Target}`)
    }
}

/* Página de registro */

function registrar(){

    let cuser = document.getElementById('cadastro-user')
    let cemail = document.getElementById('cadastro-email')
    let cpass = document.getElementById('cadastro-pass')
    let cpass2 = document.getElementById('cadastro-pass2')

    if(cuser.value == '' || cemail.value == '' || cpass.value == '' || cpass2.value == ''){
        alert('Faltam dados para o cadastro!')
    }else if(cpass.value != cpass2.value){
        alert('Senhas não coincidem!')
    }else{
        alert('Cadastro realizado com sucesso! Entre para continuar.')
        location.href = "index.html"
    }
}