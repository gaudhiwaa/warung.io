package com.reactsb.reactsb.model;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Review(String author, String description, String title) {
        this.author = author;
        this.description = description;
        this.title = title;
    }


    public Review(long id, String author, String description, String title) {
        this.id = id;
        this.author = author;
        this.description = description;
        this.title = title;
    }

    @Column(name = "author")
    private String author;
    @Column(name = "description")
    private String description;
    @Column(name = "title")
    private String title;

    public Review(){

    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public Review(String username, String password) {
//        this.username = username;
//        this.password = password;
//    }
//
//    @Column(name = "username")
//    private String username;
//
//    @Column(name = "password")
//    private String password;
//
//    public Review(String firstName, String lastName, String emailID) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.emailID = emailID;
//    }
//
//    public Review(){
//
//    }
//
//    public long getId() {
//        return id;
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getEmailID() {
//        return emailID;
//    }
//
//    public void setEmailID(String emailID) {
//        this.emailID = emailID;
//    }




}
