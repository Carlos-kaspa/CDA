const api_url = 'http://localhost:5000/instructors';

const Form = document.querySelector('.regForm') //captura a tag form, mas podia usar getelementbyclasname ou id caso quisesse.


console.log(Form)


Form.addEventListener('submit', (event) => {   
  
    event.preventDefault(); //impede a página de recarregar automaticamente quando envia o post

    const formData = new FormData(Form) //formdata é uma função presente no js https://developer.mozilla.org/pt-BR/docs/Web/API/FormData/FormData

    const name = formData.get('name')
    const email = formData.get('email')
    const confEmail = formData.get('confEmail')
    const tel = formData.get ('telephone')
    const gender = formData.get('gender')
    const birthDate = formData.get('birthDate')


    const registry = {
        name,
        email,
        confEmail,
        tel,
        gender,
        birthDate
    }

    console.log(registry)

    //fetch para gerar um api que envie um objeto json com os posts para o servidor
    fetch(api_url,{ 

        method: 'POST',
        body: JSON.stringify(registry),
        headers: {
            'content-type': 'application/json'
        }

    })

})