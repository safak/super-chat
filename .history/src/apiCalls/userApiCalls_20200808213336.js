import axios from "axios";

export const getUser = async (userId) => {
  let user = null;
  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => user=res.data);
    return user;
  } catch (error) {
    //TODO
  }
};
