import { ISearchUserResponse } from "../types";
import { get } from "../utils/hooks/http";

export const searchUsers = (userName: string): Promise<ISearchUserResponse> =>
  get(
    `https://api.github.com/search/users?q=${userName}`
  ) as Promise<ISearchUserResponse>;
