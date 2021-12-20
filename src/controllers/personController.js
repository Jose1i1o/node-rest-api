const db = require('../models');

async function getPersons(req, res, next) {
    try {
        const persons = await db.Person.find().limit();

        res.status(200).send({
            data: persons
        });
    } catch (err) {
        next(err);
    }
}

async function createPerson(req, res, next) {
    try {
        const {
            firstName,
            lastName,
            dateOfBirth,
            placeOfBirth,
            roles
        } = req.body;

        const newPerson = await db.Person.create({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            placeOfBirth: placeOfBirth,
            roles: roles
        });

        res.status(201).send({
            data: newPerson,
        });
    } catch (err) {
        next(err);
    }
}

async function updatePerson(req, res, next) {
    const {
        id: personId
    } = req.params;

    try {
        const updatedPerson = await db.Person.findByIdAndUpdate(
            personId, req.body, {
                new: true
            },
        );

        res.status(203).send({
            data: updatedPerson
        });
    } catch (err) {
        next(err);
    }
}

async function deletePerson(req, res, next) {
    const {
        id: PersonId
    } = req.params;

    try {
        const result = await db.Person.deleteOne({
            _id: personId
        });

        if (result.ok === 1 && result.deletedCount === 1) {
            res.status(204).send({
                data: "Person removed successfully"
            });
        } else {
            res.status(404).send({
                err: "Person not removed"
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getPersons: getPersons,
    createPerson: createPerson,
    updatePerson: updatePerson,
    deletePerson: deletePerson
}