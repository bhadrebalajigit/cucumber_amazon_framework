package com.qa.utils;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
/**
 * @ Author Balaji Bhadre
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

public static void Return_jsonarray(String object,String filename) throws FileNotFoundException, IOException, ParseException
{
	 JSONParser parser=new JSONParser();
	 Object obj = parser.parse(new FileReader(System.getProperty("user.dir")+"/src/main/resources/com/qa/datafiles/"+filename+""+".json"));
	 JSONObject jsonObject = (JSONObject) obj;
	 JSONArray msg = (JSONArray) jsonObject.get(object);
	 Iterator itr2 = msg.iterator();  
     while (itr2.hasNext())  
     { 
        Iterator itr1 = ((Map) itr2.next()).entrySet().iterator(); 
         while (itr1.hasNext()) { 
             Map.Entry pair = (Entry) itr1.next(); 
             System.out.println(pair.getKey() + " : " + pair.getValue()); 
      } 
}

}
}
