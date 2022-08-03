package net.coffeproject;

import java.io.FileReader;
import java.io.IOException;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

 
public class App 
{
    public static void main( String[] args ){
    	
    	JSONObject myDrinks;
        try {
			 myDrinks = (JSONObject) new JSONParser().parse(new FileReader("E:\\proyecto CofeWeb\\proyectoWeb\\js\\objetosCafe.json"));
			 System.out.println(myDrinks);
		} catch (IOException | ParseException e) {
			
			e.printStackTrace();
		}
        
        
    }
}
