const getUsers = async (req, res) => {
  try {
      let userInstance = ModelFactory.getUserInstance();
      let usersList = await userInstance.find();
      res.status(200).json(usersList);
  } catch (err) {
      console.log("err ===>", err);
      res.status(400).json({ msg: "Error in fetching users data" });
      return;
  }
};

const deleteUser = async (req, res) => {
  try{
      let userInstance = ModelFactory.getUserInstance();
      let user = await userInstance.findOneAndDelete({_id: req.params.userId});
      res.status(200).json(user);
  } catch (err) {
      console.log("err ===>", err);
      res.status(400).json({ msg: "Error in deleting user data" });
      return;
  }
};

let endpoints = {
  "/users/": [{
      method: "GET",
      callbacks: [getUsers]
  }],
  "/users/:userId": [{
      method: "DELETE",
      callbacks: [deleteUser]
  }]
};

export {
  endpoints
};