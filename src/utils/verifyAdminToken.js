import jwt from "jsonwebtoken";

export const verifyAdminToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.isAdmin === true;
  } catch (err) {
    return false; // Token verification failed
  }
};


// Function to decode the token
export const decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};

