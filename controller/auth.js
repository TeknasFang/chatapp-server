const UserModel = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const { validationResult } = require('express-validator')


const register = asyncHandler(async (req, res) => {

    const { username, email, password, avatarImage } = req.body

    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})

    

})