const Person = require('../Models/person');

// Create a new person
const createPerson = async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data saved");
        res.status(201).json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get all persons
const getAllPersons = async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get person by ID
const getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json(person);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a person by ID
const updatePerson = async (req, res) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete a person by ID
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        if (!deletedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Export all functions
module.exports = {
    createPerson,
    getAllPersons,
    getPersonById,
    updatePerson,
    deletePerson
};
