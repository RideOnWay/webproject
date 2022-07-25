package net.coffeproject;

import org.json.*;

public class App 
{
    public static void main( String[] args ){
        JSONObject myObject = new JSONObject();

        // Cadenas de texto básicas
        myObject.put("name", "Carlos");
        myObject.put("last_name", "Carlos");
        
        // Valores primitivos
        myObject.put("age", 21);
        myObject.put("bank_account_balance",20.2);
        myObject.put("is_developer", true);
        
        // Matrices
        double[] myList = {1.9, 2.9, 3.4, 3.5};
        myObject.put("number_list", myList);
        
        // Objeto dentro de objeto
        JSONObject subdata = new JSONObject();
        myObject.put("extra_data", subdata);

        // Generar cadena de texto JSON
        System.out.print(myObject);
    }
}
