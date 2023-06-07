import { rest } from "msw";
import { users } from "./users.data";

function getUsers() {
  return rest.get(`/api/workspace`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...users }));
  });
}

export const handlers = [getUsers()];
