import { join } from 'path';
import { diskStorage } from 'multer';

export default {
  root: join(__dirname, '../uploads'),
  storage: diskStorage({
    destination: join(__dirname, `../uploads/projects`),
    filename: (req, file, cb) => {
      const filename = `${req.id}.${file.mimetype.split('/')[1]}`;
      return cb(null, filename);
    },
  }),
};
