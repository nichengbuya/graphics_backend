import { join } from 'path';
import { diskStorage } from 'multer';

export default {
  root: join(process.cwd(), `public/project`),
  storage: diskStorage({
    destination: join(process.cwd(), `public/project`),
    filename: (req, file, cb) => {
      // const filename = `${req.id}.${file.mimetype.split('/')[1]}`;
      const filename = file.originalname;
      return cb(null, filename);
    },
  }),
};
