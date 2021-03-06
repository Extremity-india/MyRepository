package com.app.extremity.main;            

//import org.apache.struts.tiles.actions.TilesAction;
import org.springframework.boot.SpringApplication; 
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
                
@SpringBootApplication(scanBasePackages="com.app")      
@SpringBootConfiguration        
@EntityScan("com.app.extremity.model")                       
@EnableJpaRepositories("com.app.extremity.idao")  
                      
public class Test {              
	public static void main(String[] args) {   
		    
		SpringApplication.run(Test.class);                              
 		System.out.println("started....");                            
	}              
}                                                                                