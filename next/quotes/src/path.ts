export const paths = {
  home() {
    return "/";
  },
  bookShow(bookSlug: string) {
    return `/books/${bookSlug}`;
  },
  commentCreate(bookSlug: string) {
    return `/books/${bookSlug}/comments/new`;
  },
  commentShow(bookSlug: string, commentId: string) {
    return `/books/${bookSlug}/comments/${commentId}`;
  },
};
