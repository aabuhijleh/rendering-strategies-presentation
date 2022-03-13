import path from "path";

export const removeExtension = (file: string) => {
  return path.basename(file, path.extname(file));
};

export const replaceExtension = (file: string, extension: string) => {
  const basename = removeExtension(file);
  return path.join(path.dirname(file), basename + extension);
};
