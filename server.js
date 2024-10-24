server.post(`/signup`, (req, res) => {
    const { name, email, password, number, tac } = req.body;

    // Form validation
    if (name.length < 3) {
        res.json({ 'alert': 'Name must be 3 letters long' });
    } else if (!email.length) {
        res.json({ 'alert': 'Enter your email' });
    } else if (password.length < 8) {
        res.json({ 'alert': 'Password must be greater than 8 characters' });
    } else if (isNaN(number) || number.length < 11) {
        res.json({ 'alert': 'Invalid number! Please enter a valid number' });
    } else if (!tac) {
        res.json({ 'alert': 'Must agree to our terms and conditions' });
    } else {
        // Store the data in DB
        const users = collection(db, 'users');
        getDoc(doc(users, email)).then(userDoc => {
            if (userDoc.exists()) {
                return res.json({ 'alert': 'Email already exists' });
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        console.error(err);
                        return res.json({ 'alert': 'Error generating salt' });
                    }
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            console.error(err);
                            return res.json({ 'alert': 'Error hashing password' });
                        }
                        req.body.password = hash;
                        req.body.seller = false;

                        // Set the doc
                        setDoc(doc(users, email), req.body).then(data => {
                            console.log('Data stored successfully');
                            res.json({
                                name: req.body.name,
                                email: req.body.email,
                                seller: req.body.seller
                            });
                        }).catch(err => {
                            console.error(err);
                            res.json({ 'alert': 'Error storing data' });
                        });
                    });
                });
            }
        }).catch(err => {
            console.error(err);
            res.json({ 'alert': 'Error checking user existence' });
        });
    }
});

server.get(`/404`, (req, res) => {
    res.sendFile("404.html", { root: "public" });
});

server.use((req, res, next) => {
    res.status(404).sendFile("404.html", { root: "public" });
});

let port = 8080;
server.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});