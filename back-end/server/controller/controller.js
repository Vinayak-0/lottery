var User=require('../model/model');
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


exports.register = async(req, res) => {

    console.log(req)
    try {
      const { first_name, last_name, email, password } = req.body.user;
      console.log(email+" "+password+" "+first_name+" "+last_name)

      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    console.log(user.email)

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

exports.login = async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body.user;
      console.log(email+" "+password)
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  };

//   retrieve and return all users/ retrieve and return a single user
  exports.find=async (req,res)=>{
  User.find()
  .then(user=>{
      res.send(user)
  })
  .catch(err=>{
      res.status(500).send({message:err.message|| "Error Occured"})
  })
  }
  
  //update a new identified user by user id
  exports.update=(req,res)=>{
  
  }