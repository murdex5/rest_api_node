import express from 'express'

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Henry",
        age: 22
    }
]

// All routes in here starts with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);
    console.log(`User with the name ${user.firstName} added to the database`);
});

export default router;