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
			/*file=new FileReader(System.getProperty("user.dir")+"/src/main/java/com/qa/config/products.txt");
			buffer= new BufferedReader(file);
			return buffer;*/
			BufferedReader bufReader = new BufferedReader(new FileReader(System.getProperty("user.dir")+"/src/main/java/com/qa/config/products.txt")); 
			ArrayList<String> listOfLines = new ArrayList<>(); 
			String line = bufReader.readLine(); 
			while (line != null) 
			{ listOfLines.add(line); 
			line = bufReader.readLine();
			}
			 System.out.println(listOfLines);
			bufReader.close();
		

		}
		
	
		

		
		public static void main(String args[]) throws IOException
		{
			Product_reader p1= new Product_reader();
			p1.filereader();
			
		}
	}
