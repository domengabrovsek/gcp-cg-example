import fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

const server = fastify({ logger: true });

server.register(cors);
server.register(helmet);

server.get("/", function (_request, reply) {
  reply.code(200).send({ message: "Today is an awesome day!" });
});

server.get("/test", async (_request, reply) => {
  reply.code(200).send({ message: "Hello from GCP Competence group!" });
});

server.listen({ port: 3000, host: '0.0.0.0' });