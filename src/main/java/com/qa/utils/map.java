package com.qa.utils;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import com.google.common.collect.Multiset.Entry;

public class map {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		Map map=new HashMap<String,String>();
		map.put("name","balaji");
		map.put("surname","bhadre");
		map.put("Address", "Krystal city");
	
		
		Set set=map.entrySet();
		Iterator itr=set.iterator();
		while(itr.hasNext())
		{
			Map.Entry<String, String> itr2= (java.util.Map.Entry<String, String>) itr.next();
			System.out.println("Key:"+itr2.getKey()+"Value:"+itr2.getValue());
		}
	}

}
