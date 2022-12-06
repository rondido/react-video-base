import { rest } from "msw";

export const handlers = [
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
