package com.api.services;


import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class BaseService {
    //Create Base URI
    //handle request
    //handle response
   private static final java.lang.String BASE_URL = "http://64.227.160.186:8080";
    private RequestSpecification requestSpecification;
    public BaseService(){
        requestSpecification = given().baseUri(BASE_URL);

    }
    public Response postRequest(Object payload, String endpoint){
       return requestSpecification.contentType(ContentType.JSON).body(payload).post(endpoint);
    }
}
