module.exports = (req, res, next) => {

    const { regNo, name, contact_number, hostel, room_no, password, student_email } = req.body;
    

    function useRegex(input) {
        let regex = /^u\d\d\d\d\d\d\d@giki\.edu\.pk$/i;
        return regex.test(input);
    }

    if (req.path === '/register') {
        if (![regNo, name, contact_number, hostel, room_no, password, student_email].every(Boolean)) {
            return res.status(401).json("Missing credietials");
        }
        if (!useRegex(student_email)) {
            return res.status(401).json("Invalid Email");
        }
        next();
    }

    if(req.path === '/login') {
        if (![student_email , password].every(Boolean)) {
            return res.status(401).json("Missing credietials");
        }
        if (!useRegex(student_email)) {
            return res.status(401).json("Invalid Email");
        }
        next();
    }

}