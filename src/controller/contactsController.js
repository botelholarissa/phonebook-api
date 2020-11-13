const contactsCollections = require('../models/contactsSchema');

const getAll = (request, response) => {
    contactsCollections.find((error, contacts) => {
        if (error) {
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

    const contact = new contactsCollections(contactBody); //criando um novo dado com o Body

    contact.save((error) => {
        if (error) {
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
    const nameParam = request.params.name;

    console.log(nameParam);

    contactsCollections.findOne({ name: nameParam }, (error, contact) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            if (contact) {
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

    contactsCollections.findById(idParam, (error, contact) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            if (contact !== null) {
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

const deleteById = (request, response) => {
    const idParam = request.params.id;

    contactsCollections.findByIdAndDelete(idParam, (error, contacts) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            if (contacts) {
                return response.status(200).send({
                    message: "DELETE com sucesso"
                });
            } else {
                return response.status(404);
            }
        }
    })
}

const updatePhone = (request, response) => {
    const idParam = request.params.id;
    const updateObject = request.body;
    const update = { new: true };

    contactsCollections.findByIdAndUpdate(
        idParam,
        updateObject,
        update,
        (error, contact) => {
            if (error) {
                return response.status(500).send(error);
            } else {
                if (contact) {
                    return response.status(200).send({
                        message: "PUT com sucesso",
                        contact
                    });
                } else {
                    return response.status(404);
                }
            }
        })
}


const updateContact = (request, response) => {
    const idParam = request.query.id;
    const contactBody = request.body;
    const update = { new: true };

    contactsCollections.findByIdAndUpdate(
        idParam,
        contactBody,
        update,
        (error, contact) => {
            console.log(contact)
            if (error) {
                return response.status(500).send(error);
            } else {
                if (contact) {
                    return response.status(200).send({
                        message: "PUT com sucesso",
                        contact
                    });
                } else {
                    return response.status(404);
                }
            }
    })
}


module.exports = {
    getAll,
    addContact,
    getByName,
    getById,
    deleteById,
    updatePhone,
    updateContact
}