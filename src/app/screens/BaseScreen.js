import React, {Component} from "react";

export default class BaseScreen extends Component {
  componentDidMount() {
    if (!this.article) {
      return;
    }
    const title = this.article.metaData.find(meta => meta.type === 'title');
    const description = this.article.metaData.find(meta => meta.type === 'description');
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (title) {
      document.title = title.content;
    }
    if (metaDescriptionTag) {
      metaDescriptionTag.content = description;
    }
  }
}
