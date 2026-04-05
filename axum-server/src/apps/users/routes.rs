use axum::{
    Router,
    routing::get,
};

pub fn router() -> Router {
    Router::new().route("/users", get(|| async { "users router!" }))
}
