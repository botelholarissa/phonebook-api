const contactsColletion = require('../models/contactsSchema');
const contactsCollections = require('../models/contactsSchema');

const getAll = (request, response)=>{
    console.log(request.url);
    contactsCollections.find((error, contacts) => {
        if(error){
            return response.status(500).send(error);
        } else {
            return response.status(200).json({
                message: "GET com sucesso",
                contacts
            });
        }
    })
}

const addContact = (request, response) => {
    const contactBody = request.body; //pegando o body

    const contact = new contactsColletion(contactBody); //criando um novo dado com o Body

    contact.save((error)=>{
        if(error){
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                message: "POST com sucesso",
                contact
            })
        }
    })
}

 const getByName = (request, response) => {
    console.log(request.url);
    const nameParam = request.params.name;
    
    console.log(nameParam);

    contactsCollections.findOne({name: nameParam}, (error, contact)=>{
        if (error){
            return response.status(500).send(error);
        } else {
            if(contact){
                return response.status(200).send({
                    message: "GET por nome com sucesso",
                    contact
                });
            } else {
                return response.status(404).send("Contato não existe.")
            }
        }
    })   
}

const getById = (request, response) => {
    const idParam = request.params.id;
    
    contactsCollections.findById(idParam, (error, contact) =>{
        console.log(contact)
        if (error){
            return response.status(500).send(error);
        } else {
            if(contact !== undefined){
                return response.status(200).send({
                    message: "GET por Id com sucesso",
                    contact
                });
            } else {
                return response.status(404).send("Contato não existe.")
            }
        }
    })
}

module.exports = {
    getAll,
    addContact,
    getByName,
    getById
}