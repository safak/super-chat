import ConversationActionTypes from "../context/conversation/ConversationActionTypes";
import axios from "axios";
import { getUser } from "./userApiCalls";

export const getPrivateConversations = async (
  userId,
  setPrivateConversations,
  dispatch
) => {
  dispatch({
    type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_START,
  });

  const conversations = [];

  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => {
      const id = res.data.map((r) => {
        const id = r.members.filter((m) => m._id !== userId)[0];
        axios.get(`/api/users/${userId}`).then((res) => {
          r = { ...r, user: res.data };
          conversations.push(r);
          setPrivateConversations(conversations)
        });
      });

      dispatch({
        type:
          ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
      });
    });
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
      payload: error,
    });
  }
};
