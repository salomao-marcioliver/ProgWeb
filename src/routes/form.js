import express from 'express'
import { addForm, getForms } from '../controllers/formController.js';
const router = express.Router()

router.get('/', getForms);

router.post('/add', addForm);

export default router;