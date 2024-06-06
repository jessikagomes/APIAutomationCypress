/// <reference types="cypress"/>

describe('Cadastrar Dispositivos',()=>{

    it('Cadastrar dispositivo com sucesso', () =>{
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Windows Jessika PC",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        }).then((resultado)=>{
            expect(resultado.status).to.eql(200)
            expect(resultado.body.id).to.not.empty
            expect(resultado.body.name).to.eql('Windows Jessika PC')
        })
    })

})