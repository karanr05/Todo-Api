const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const router = express.Router();

const app = express();

dotenv.config();

// let PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
// 	console.log(`Server is up and running on ${PORT} ...`);
// });

app.post("/user/login", (req, res) => {
	
	const userId = 12;
	const jwtSecretKey = process.env.JWT_SECRET_KEY;
	const token = jwt.sign({ userId: userId }, jwtSecretKey);
	res.send(token);
});

app.get("/user/verifyToken", (req, res) => {
	const tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
	const jwtSecretKey = process.env.JWT_SECRET_KEY;

	try {
		const token = req.headers[tokenHeaderKey];

		if (!token) {
			return res.status(401).send("No token provided");
		}

		const verified = jwt.verify(token, jwtSecretKey);
		if (verified) {
			return res.send("Successfully Verified");
		} else {
			return res.status(401).send("Invalid token");
		}
	} catch (error) {
		console.error('Token verification error:', error);
		return res.status(401).send("Invalid token");
	}
});


module.exports = router;