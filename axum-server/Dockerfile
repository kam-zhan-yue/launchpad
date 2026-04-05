FROM rust:1.86.0-slim

WORKDIR /app
COPY . .
RUN cargo install  --locked bacon
RUN cargo build

EXPOSE 8000

CMD ["cargo", "run"]
