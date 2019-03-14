package com.qa.utils;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.json.simple.parser.ParseException;

public class jsontest {

	/**
	 * @param args
	 * @throws ParseException 
	 * @throws IOException 
	 * @throws FileNotFoundException 
	 */
	public static void main(String[] args) throws FileNotFoundException, IOException, ParseException {
		
		System.out.println("Jsonreader:"+json_reader.Return_jsonobject("Password", "Login_test_data"));

	}

}
