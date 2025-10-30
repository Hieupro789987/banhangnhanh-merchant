import * as jwt_decode from "jwt-decode";

export const isTokenExpired = (token: string) => {
  if (!token) {
    return true;
  }

  try {
    let decodedToken = jwt_decode.jwtDecode(token) as {
      exp: number;
      role: string;
    };

    const exp = decodedToken.exp;
    if (!exp) {
      return true;
    }

    const currentTime = Date.now() / 1000;

    return exp < currentTime;
  } catch (error) {
    console.error("Lỗi khi giải mã hoặc kiểm tra token:", error);
    return true;
  }
};
