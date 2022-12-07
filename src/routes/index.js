import express from 'express'
import * as FormController from '../controllers/formController';
const router = express.Router()

router.get('/', FormController.home);

router.post('/novo-form', FormController.addFormAction);

export default router;