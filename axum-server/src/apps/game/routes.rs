use axum::{Router, routing::get};

pub fn router() -> Router {
    Router::new().route("/games", get(|| async { "game router!" }))
}
