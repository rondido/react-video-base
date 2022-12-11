import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user/123", async (req, res, ctx) => {
    return res(
      ctx.json({
        name: "park"
      })
    );
  }),
  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id");
    return res(
      ctx.json({
        name: id === "1" ? "The one" : "The others",
      })
    );
  }),
  rest.put("http://localhost:3000/todo", async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: "todo from server",
        },
      })
    );
  }),
  rest.put("http://localhost:3000/count/increment", async (req, res, ctx) => {
    const value = req.body.value;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: id,
        //         age: 135,
        //       },
        //     ],
        //   },
        // })
        ctx.status(403),
        ctx.json({
          errorMessage: "error",
        })
      );
    }
  ),
];
