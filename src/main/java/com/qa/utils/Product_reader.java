package com.qa.utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;



public class Product_reader 
	{
	
		private FileReader file;
		private BufferedReader buffer;
		public void filereader() throws IOException
		{

			BufferedReader bufReader = new BufferedReader(new FileReader(System.getProperty("user.dir")+"/src/main/java/com/qa/config/products.txt")); 
			ArrayList<String> listOfLines = new ArrayList<>(); 
			String line = bufReader.readLine(); 
			
			if(line!=null)
			{
				String[] split=line.split(",");
				for(String a:split)
				{
					System.out.println(a);
				}
				line = bufReader.readLine();
			}
				 
			bufReader.close();
		}
		public static void main(String args[]) throws IOException
		{
			Product_reader p1= new Product_reader();
			p1.filereader();
			
		}
	}
