import nextConnect from 'next-connect';
import { isAuth, isAdmin } from '../../../utils/auth';
import { onError } from '../../../utils/error';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: 'dvygyuojg',
  api_key: '572827653229951',
  api_secret: 'VtK_Bb7NcGj1Cu-7qFOJY3nK_lI'
  
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect({ onError });
const upload = multer();

handler.use(isAuth, isAdmin, upload.single('file')).post(async (req, res) => {
  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };
  const result = await streamUpload(req);
  res.send(result);
});

export default handler;