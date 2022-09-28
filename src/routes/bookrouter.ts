import {Router} from 'express';
import { createbook ,getbooks,updatebook,deletebook} from '../controller/book';
const router=Router();

router.post('/',createbook);
router.get('/',getbooks);
router.patch('/:id',updatebook);
router.delete('/:id',deletebook);
export default router;