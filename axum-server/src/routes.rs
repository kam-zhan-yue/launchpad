use crate::apps::{game, users};
use axum::{Router, http::Method, routing::get};
use tower::ServiceBuilder;
use tower_http::cors::CorsLayer;

pub fn router() -> Router {
    Router::new()
        .merge(root())
        .merge(game::routes::router())
        .merge(users::routes::router())
        .layer(ServiceBuilder::new().layer(cors_layer()))
}

fn root() -> Router {
    Router::new().route("/", get(|| async { "Hello World!" }))
}

fn cors_layer() -> CorsLayer {
    CorsLayer::new()
        .allow_origin([
            "https://alexander-kam.com".parse().unwrap(),
            "http://localhost:3000".parse().unwrap(),
        ])
        .allow_methods([Method::GET, Method::POST])
}
