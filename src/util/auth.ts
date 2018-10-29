import jwt from 'jsonwebtoken';
import _ from 'lodash';

export class AuthUtil {
    private static JWT_SECRET = '123testando';

    private static getSecret() {
        return process.env.JWT_SECRET || AuthUtil.JWT_SECRET;
    }

    static verificaTokenJWT(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, AuthUtil.getSecret(), (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err);
                } else {
                    resolve(decodedToken);
                }
            });
        });
    }

    static createJWToken(details: any) {
        if (typeof details !== 'object') {
            details = {};
        }

        if (!details.maxAge || typeof details.maxAge !== 'number') {
            details.maxAge = 3600;
        }

        details.sessionData = _.reduce(details.sessionData || {}, (memo: any, val, key) => {
            if (typeof val !== "function" && key !== "password") {
                memo[key] = val;
            }

            return memo;
        }, {});

        let token = jwt.sign({
            data: details.sessionData
        }, AuthUtil.getSecret(), {
            expiresIn: details.maxAge,
            algorithm: 'HS256'
        });

        return token;
    }

    static estaAutenticado(req: any, res: any, next: any) {
        let token = (req.method === 'POST') ? req.body.token : req.query.token;

        return AuthUtil.verificaTokenJWT(token)
            .then((decodedToken) => {
                req.user = decodedToken.data;
                next();
            })
            .catch((err) => {
                res.status(400).json({
                    error: err,
                    message: "Token invalido"
                });
            });
    }
}