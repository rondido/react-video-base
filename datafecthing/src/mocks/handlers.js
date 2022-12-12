import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `park ${userId}`,
      })
    );
  }),
  rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json([
        {
          id: `1 ${pageIndex}`,
          name: `park 1 ${pageIndex}`,
        },
        {
          id: `2 ${pageIndex}`,
          name: `park 2 ${pageIndex}`,
        },
        {
          id: `3 ${pageIndex}`,
          name: `park 3 ${pageIndex}`,
        },
        {
          id: `4 ${pageIndex}`,
          name: `park 4 ${pageIndex}`,
        },
        {
          id: `5 ${pageIndex}`,
          name: `park 5 ${pageIndex}`,
        },
      ])
    );
  }),
];
