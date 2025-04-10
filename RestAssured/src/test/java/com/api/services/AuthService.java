package com.api.services;

import com.api.models.Response.LoginResponse;
import io.restassured.response.Response;

public class AuthService extends BaseService {
 private static final String BASE_PATH = "/api/auth/";
 public Response login(Object payload){
     return postRequest(payload,BASE_PATH+"login");
 }
}
