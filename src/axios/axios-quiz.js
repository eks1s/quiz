import axios from "axios";

export default axios.create({
  baseURL:
    "https://react-quiz-f9622-default-rtdb.europe-west1.firebasedatabase.app/",
});
