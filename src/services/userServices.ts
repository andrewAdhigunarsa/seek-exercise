import { UserDetailsInterface } from "../interfaces/auth.interface";
import { currentUsers, tokens } from "../configs/mockValues";

export async function getUserDetails(
  token?: string
): Promise<UserDetailsInterface> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        console.log("user details retrieved");
        const username = tokens.filter((v) => v.token === token)[0].username;
        const userDetails = currentUsers.filter(
          (u) => u.username === username
        )[0];
        resolve(userDetails);
      } else {
        alert("failed to retrieve user details");
        console.log("failed to retrieve user details");
        reject("failed to retrieve user details");
      }
    }, 1000);
  });
}
