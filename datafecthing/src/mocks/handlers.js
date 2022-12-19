import { rest } from "msw";

const todos = [
  {
    id: `1 `,
    title: `park 1 `,
  },
  {
    id: `2 `,
    title: `park 2 `,
  },
  {
    id: `3 `,
    title: `park 3 `,
  },
  {
    id: `4 `,
    title: `park 4 `,
  },
  {
    id: `5 `,
    title: `park 5 `,
  },
];

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
  rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json({
        projects: [
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
        ],
        hasMore: pageIndex < 4,
        nextCursour: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
      })
    );
  }),

  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(true));
  }),
];
