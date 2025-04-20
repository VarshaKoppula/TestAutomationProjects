package com.api.services;


import com.api.configs.ConfigManager;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class BaseService {
    //Create Base URI
    //handle request
    //handle response
    private static final String BASE_URL = ConfigManager.getBaseUrl();
    private RequestSpecification requestSpecification;
    public BaseService(){
        requestSpecification = given().baseUri(BASE_URL);

    }
    public Response postRequest(Object payload, String endpoint){
       return requestSpecification.contentType(ContentType.JSON).body(payload).post(endpoint);
    }
}
