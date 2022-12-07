import User from "../models/Form"

export const home = async(req, res) => {
    res.render()
}

export const addFormAction = async(req, res) => {
    let newUser = new User()
    let newName = req.body.name;
    let newAge = req.body.age;

    newUser.name = newName;
    newUser.age = newAge;

    try {
        await newUser.save();
        console.log("O formulario foi salvo com sucesso");
    }catch (error){
        console.log(`Houve um erro: ${error}`);
    }
}