package com.qa.Managers;

import java.io.IOException;

import com.qa.DataProviders.ConfigFileReader;

public class FileReaderManager {
 
 private static FileReaderManager fileReaderManager = new FileReaderManager();
 private static ConfigFileReader configFileReader;
 
 private FileReaderManager() {
 }
 
 public static FileReaderManager getInstance( ) {
       return fileReaderManager;
 }
 
 public ConfigFileReader getConfigReader() throws IOException {
 
	 return (configFileReader == null) ? new ConfigFileReader() : configFileReader;

 }
}