"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
    showData() {
        console.log(this.id, this.title, this.body);
    }
}
const post = new Post(1, "title", "body");
post.showData();
