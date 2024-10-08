FROM oven/bun:1

WORKDIR /app

COPY server.tsx .

EXPOSE 3000

CMD [ "bun", "run", "server.tsx"]