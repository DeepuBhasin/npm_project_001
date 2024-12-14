import { IPost } from "./index";

class Post implements IPost {
  constructor(public id: number, public title: string, public body: string) {}

  showData() {
    console.log(this.id, this.title, this.body);
  }
}

const post = new Post(1, "title", "body");

post.showData();
