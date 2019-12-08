package me.ricky.demobootweb;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Person {

    @Id @GeneratedValue
    private Long id;

    private String name;

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public Long getId(){
        return id;
    }

    public void setName(Long id){
        this.id = id;
    }
}
