package com.qa.utils;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
/**
 * Author Balaji Bhadre
 * @param object,filename
 * @throws ParseException 
 * @throws IOException 
 * @throws FileNotFoundException 
 */

public class json_reader 
{
public static String Return_jsonobject(String object,String filename) throws FileNotFoundException, IOException, ParseException
	{
		JSONParser parser=new JSONParser();
		 Object obj = parser.parse(new FileReader(System.getProperty("user.dir")+"/src/main/resources/com/qa/datafiles/"+filename+""+".json"));
		 JSONObject jsonObject = (JSONObject) obj;
		 String jsonstring = (String) jsonObject.get(object);
		 return jsonstring;
		 
	}
}
