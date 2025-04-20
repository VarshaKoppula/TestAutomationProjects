package com.api.configs;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigManager {
    private static Properties props;

    static {
        loadProperties();
    }

    private static void loadProperties() {
        props = new Properties();
        try (InputStream input = ConfigManager.class.getClassLoader().getResourceAsStream("configuration.properties")) {
            if (input == null) {
                throw new RuntimeException("Unable to find config.properties");
            }
            props.load(input);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load properties file", e);
        }

    }
    public static String getBaseUrl(){
        String baseUrl =  props.getProperty("BASE_URL");
        return baseUrl;
    }

}
