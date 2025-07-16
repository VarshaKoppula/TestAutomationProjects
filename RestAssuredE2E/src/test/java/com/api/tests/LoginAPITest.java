package com.api.tests;

import com.api.models.Request.ForgotPasswordRequest;
import com.api.models.Request.LoginRequest;
import com.api.models.Response.LoginResponse;
import com.api.services.AuthService;
import io.restassured.response.Response;
import org.testng.annotations.Test;

public class LoginAPITest{
    @Test
    public void loginTest(){
        AuthService authService = new AuthService();
        LoginRequest loginRequest = new LoginRequest("uday1234","uday12345");
        Response response = authService.login(loginRequest);
        if (response.getContentType().contains("application/json")) {
            LoginResponse loginResponse = response.as(LoginResponse.class);
            System.out.println(loginResponse.toString());
        } else {
            System.err.println("Unexpected content type: " + response.getContentType());
            System.err.println("Response body: " + response.getBody().asString());
        }
    }

    @Test
    public void forgotPassword(){
        AuthService authService = new AuthService();
        ForgotPasswordRequest forgotPasswordRequest = new ForgotPasswordRequest("KareenaSaifu@gmail.com" );
        Response response = authService.forgotPassword(forgotPasswordRequest);
        System.out.print(response.prettyPrint());
    }
    @Test
    public void signUpPassword(){
        AuthService authService = new AuthService();
        ForgotPasswordRequest forgotPasswordRequest = new ForgotPasswordRequest("KareenaSaifu@gmail.com" );
        Response response = authService.forgotPassword(forgotPasswordRequest);
        System.out.print(response.prettyPrint());
    }
    @Test
    public void getAccountsTest(){
        AuthService authService = new AuthService();
        LoginRequest loginRequest = new LoginRequest("uday1234","uday12345");
        Response response = authService.login(loginRequest);
        if (response.getContentType().contains("application/json")) {
            LoginResponse loginResponse = response.as(LoginResponse.class);
            System.out.println(loginResponse.toString());
        } else {
            System.err.println("Unexpected content type: " + response.getContentType());
            System.err.println("Response body: " + response.getBody().asString());
        }


    }
}

