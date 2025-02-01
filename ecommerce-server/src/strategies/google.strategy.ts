import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import googleOauthConfig from "src/auth/config/google-oauth.config";

@Injectable()
export class Googlestartegy extends PassportStrategy(Strategy){
    constructor(
        @Inject(googleOauthConfig.KEY) private googleConfiguration: ConfigType<typeof googleOauthConfig>
    ){
        super({
            clientID : googleConfiguration.clientId,
            clientSecret : googleConfiguration.clientSecret,
            callbackURL : googleConfiguration.callbackURL,
            scope : ['email','profile'] 
        })
    }

    async validate(accessToken: string , refreshToken : string,profile:any,done :VerifyCallback){ 
            
    }
}