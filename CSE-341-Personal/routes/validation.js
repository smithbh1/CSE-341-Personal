const { check, validationResult } = require('express-validator');

exports.signupValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
 
exports.loginValidation = [
     check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
 
]
exports.journalEntryValidation = [
    check('firstName', 'Please Input your first name').not().isEmpty(),
    check('lastName', 'Please Input your last name').not().isEmpty(),
    check('date', 'Please Input todays date').not().isEmpty(),
    check('quote', 'Please Input the quote of the day').not().isEmpty(),
    check('entry', 'Please Input todays journal entry').not().isEmpty(),
    check('goalsComplete', 'Please Input the goals completed').not().isEmpty(),
    check('goalsToDo', 'Please Input goals to continue working on').not().isEmpty()
    
];

exports.results = validationResult;