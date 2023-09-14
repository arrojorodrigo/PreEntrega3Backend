import { Router } from "express";
import { socketServer } from "../app.js";
import { checkAuthorization, checkSession, sendError } from "../utils.js";
import viewsController from "../controllers/views.controller.js";

const router = Router();

router.get('/', async (req, res) => { res.redirect('/login') })

router.get('/products', checkAuthorization('admin'),viewsController.allProducts)

router.get('/realtimeproducts', viewsController.realTimeProducts)

router.get('/carts/:cid', viewsController.oneCart)

router.get('/chat', checkAuthorization('admin'), viewsController.getChat)

// AUTHENTICATION
router.get('/register', (req, res) => { res.render('register', { style: 'auth.css' }) })

router.get('/login', checkSession, (req, res) => { res.render('login', { style: 'auth.css' }) })

router.get('/profile', (req, res) => { res.render('profile', { style: 'user.css' })})

export default router;