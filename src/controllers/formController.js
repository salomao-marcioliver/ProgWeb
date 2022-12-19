import { conn } from "../database/db.js";

export const getForms = async(req, res) => {
    const q = "SELECT * FROM form"

    conn.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.status(200).json(data);
        }
    });
}

export const addForm = (req, res) => {
    const q = 
        "INSERT INTO form(`name`, `email`, `questions`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.question
    ];

    conn.query(q, [values], (err) => {
        if(err){
            return res.json(err);
        }else {
            res.redirect("/");
        }
    });
}