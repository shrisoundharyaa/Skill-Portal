import { verify } from 'jsonwebtoken';

const auth = (role) => {
  return (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
      // eslint-disable-next-line no-undef
      const decoded = verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      if (role && role !== req.user.role) {
        return res.status(403).json({ msg: 'Access denied' });
      }
      next();
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  };
};

export default auth;
