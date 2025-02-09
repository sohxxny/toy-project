// * types 이미지를 export 하는 파일
export const typeImages = import.meta.glob("./*.png", {
  eager: true,
  as: "url",
});
