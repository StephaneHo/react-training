export const paths = {
  home() {
    return "/";
  },
  topicShow(tag: string) {
    return `/topics/${tag}`;
  },
  quoteCreate(tag: string) {
    return `/topics/${tag}/quotes/new`;
  },
  quoteShow(tag: string, quoteId: string) {
    return `/topics/${tag}/quotes/${quoteId}`;
  },
};
