import axios from "axios";

class PersonHelper {
  async getUserList(users) {
    const result = await axios.get(
      "https://reqres.in/api/users?page=1&per_page=10"
    );
    if (result.status === 200) {
      let combinedArray = [...users, ...result.data.data];
      const combinedArrayIds = combinedArray.map(mapObj => mapObj.id);
      combinedArray = combinedArray.filter(
        (obj, pos) => combinedArrayIds.indexOf(obj.id) === pos
      );
      return combinedArray;
    }
    return users;
  }
}

export const pearsonHelper = new PersonHelper();
