package net.coffeproject;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

 
public class App 
{
    public static void main( String[] args ) throws FileNotFoundException, IOException, ParseException{
    	
    	JSONObject myDrinks;
       
			 myDrinks = (JSONObject) new JSONParser().parse(new FileReader("E:\\proyecto CofeWeb\\proyectoWeb\\js\\objetosCafe.json"));
			 System.out.println(myDrinks);
		 
			 //metodo para remplazar el valor de la bebida
			 if (myDrinks.containsKey("Cafe")) {
				 myDrinks.put("Cafe", 555);
			 } 
			 
			 //sobreescribe el documento con los nuevos valores 
			 FileWriter fileWriter = new FileWriter("E:\\proyecto CofeWeb\\proyectoWeb\\js\\objetosCafe.json");
			    fileWriter.write(myDrinks.toJSONString());
			    fileWriter.flush();
			    fileWriter.close();
        
        System.out.println(myDrinks);
        
    
    }
}
